import userModel from "../models/userModels.js";
import validator from "validator";

const userLogin = async (req, res) => {};
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: true, message: "User already exists" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should be at least 8 characters long",
      });
    }

    const newUser = new userModel({
      name,
      email,
      password,
    });

    await newUser.save();

    res.send({
      success: true,
      message: "API is connected succesfully ",
    });
  } catch (error) {
    console.log("User Register Error");
    res.json({ success: true, message: error?.message });
  }
};
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
