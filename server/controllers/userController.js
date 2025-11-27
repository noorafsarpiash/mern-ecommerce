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
//      USER LOGIN (সংশোধিত)
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
    } // Compare password

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = createToken(user);
      // ***** এখানে সংশোধন করা হয়েছে *****
      return res.json({
        success: true, // <-- 'true' করা হয়েছে
        token, // <-- টোকেন অন্তর্ভুক্ত করা হয়েছে
        message: "User logged in successfully",
      });
    } else {
      // ***** এখানেও নিশ্চিতভাবে রিটার্ন করা হয়েছে *****
      return res.json({
        success: false,
        message: "Incorrect password",
      });
    }

    // ফাংশনটি যেহেতু আগের if/else ব্লকের মধ্যেই রিটার্ন করছে,
    // তাই নিচের এই অপ্রয়োজনীয় লাইনগুলো মুছে ফেলা হয়েছে।
  } catch (error) {
    console.log("User Login Error", error);
    res.json({ success: false, message: error?.message });
  }
};

// =====================
//      USER REGISTER (অপরিবর্তিত)
// =====================
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body; // Validation

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
    } // Existing user check

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false, // fixed (was true)
        message: "User already exists",
      });
    } // Password length check

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should be at least 8 characters long",
      });
    } // Hash password

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt); // Create new user

    const newUser = new userModel({
      name,
      email,
      password: encryptedPassword,
    });

    await newUser.save();

    res.json({
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
const adminLogin = async (req, res) => {};
const removeUser = async (req, res) => {};
const updateUser = async (req, res) => {};
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
