import userModel from "../models/userModels.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

// Create Token
const createToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

// =====================
//       USER LOGIN
// =====================
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({
        success: false,
        message: "Email is required",
      });
    }

    if (!password) {
      return res.json({
        success: false,
        message: "Password is required",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({
        success: false,
        message: "Incorrect password",
      });
    }

    // Create token
    const token = createToken(user);

    return res.json({
      success: true,
      token,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.log("User Login Error:", error);
    return res.json({ success: false, message: error.message });
  }
};

// =====================
//      USER REGISTER
// =====================
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // Existing user check
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    // Password length check
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should be at least 8 characters long",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: encryptedPassword,
    });

    await newUser.save();

    return res.json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log("User Register Error:", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// Placeholder controllers
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({
        success: true,
        token,
        message: "Admin logged in successfully",
      });
    } else {
      res.json({
        success: false,
        message: "Invalid creadientials",
      });
    }
  } catch (error) {
    console.log("Admin Login Error", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const removeUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.body._id);
    res.json({
      success: true,
      message: "User removed successfully",
    });
  } catch (error) {
    console.log("Removed user Error");
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const { _id, name, email, password } = req.body;

    // Check ID
    if (!_id) {
      return res.json({
        success: false,
        message: "User ID is required",
      });
    }

    // Find user
    const user = await userModel.findById(_id);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // Update name
    if (name) {
      user.name = name;
    }

    // Update email
    if (email) {
      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "Please enter a valid email address",
        });
      }
      user.email = email;
    }

    // Update password
    if (password) {
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Password should be at least 8 characters long",
        });
      }

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    // Save updated user
    await user.save();

    res.json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log("Update User Error:", error.message);
    res.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

const getUsers = async (req, res) => {
  res.send("Get Users");
};

export {
  userLogin,
  userRegister,
  adminLogin,
  removeUser,
  updateUser,
  getUsers,
};
