import userModel from "../models/userModels.js";
import bcrypt from "bcrypt";

import validator from "validator";

const userLogin = async (req, res) => {};
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

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

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: encryptedPassword,
    });

    await newUser.save();

    res.send({
      success: true,
      message: "User registered succesfully ",
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
