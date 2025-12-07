// C:\Web Development\mern-ecommerce\server\controllers\productController.js

import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// ⚠️ Cloudinary কনফিগারেশন যোগ করুন
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const addProduct = async (req, res) => {
  try {
    const body = req.body || {};
    const {
      _type,
      category,
      brand,
      badge,
      isAvailable,
      offer,
      name,
      price,
      discountedPercentage,
      description,
      tags,
    } = body;

    // --- প্রাথমিক ভ্যালিডেশন ---
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "Product name is required" });
    }
    if (!price) {
      return res
        .status(400)
        .json({ success: false, message: "Product price is required" });
    }
    if (!category) {
      return res
        .status(400)
        .json({ success: false, message: "Product category is required" });
    }
    if (!description) {
      return res
        .status(400)
        .json({ success: false, message: "Product description is required" });
    }

    // 1. ফাইলগুলি অ্যাক্সেস করা (memoryStorage অনুযায়ী req.files)
    const files = req.files || {};
    const image1 = files["image1"] && files.image1[0];
    const image2 = files["image2"] && files.image2[0];
    let imagesToUpload = [image1, image2].filter((item) => item !== undefined);

    if (imagesToUpload.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "At least one image is required" });
    }

    // 2. Cloudinary আপলোড লজিক
    const imagesUrl = await Promise.all(
      imagesToUpload.map(async (image) => {
        const base64Image = `data:${
          image.mimetype
        };base64,${image.buffer.toString("base64")}`;

        let result = await cloudinary.uploader.upload(base64Image, {
          folder: "mern-ecommerce/products",
        });
        return result.secure_url;
      })
    );

    // 3. Tags প্রসেসিং
    let parsedTags;
    try {
      parsedTags = JSON.parse(tags);
    } catch (error) {
      parsedTags = tags?.split(",").map((tag) => tag.trim()) || [];
    }

    // 4. ডেটাবেসে সেভ করা
    // ✅ NaN ত্রুটি এড়ানোর জন্য সেফটি চেক যোগ করা হয়েছে
    const safeDiscountedPrice = (discountedPercentage) => {
      const num = Number(discountedPercentage);
      // যদি মান থাকে এবং সেটি সংখ্যা হয় (NaN না হয়), তবে সংখ্যাটি রিটার্ন করুন
      if (discountedPercentage && !isNaN(num)) {
        return num;
      }
      // অন্যথায়, undefined রিটার্ন করুন (যা ঐচ্ছিক ফিল্ডের জন্য Mongoose গ্রহণ করবে)
      return undefined;
    };

    const newProduct = new productModel({
      _type: _type || "",
      name: name,
      images: imagesUrl,

      price: Number(price),
      // ✅ এখানে safeDiscountedPrice ফাংশন ব্যবহার করা হয়েছে
      discountedPercentage: safeDiscountedPrice(discountedPercentage),

      category: category,
      brand: brand || "",
      badge: badge === "true",
      isAvailable: isAvailable === "true",
      offer: offer === "true",
      description: description,
      tags: parsedTags,
    });

    await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error in addProduct:", error);
    // Mongoose Validation ত্রুটির জন্য 400 রেসপন্স
    if (error.name === "ValidationError") {
      return res.status(400).json({ success: false, message: error.message });
    }
    return res
      .status(500)
      .json({
        success: false,
        message: error.message || "Internal Server Error",
      });
  }
};

const removeProduct = async (req, res) => {};
const listProduct = async (req, res) => {
  res.send("Get all products");
};
const singleProduct = async (req, res) => {};

export { addProduct, removeProduct, listProduct, singleProduct };
