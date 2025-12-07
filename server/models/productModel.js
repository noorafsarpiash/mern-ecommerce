// C:\Web Development\mern-ecommerce\server\models\productModel.js

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    _type: { type: String },
    name: { type: String, required: true },
    // ✅ Image: একাধিক ইমেজ স্টোর করার জন্য Array of Strings ব্যবহার করা হলো
    images: [{ type: String, required: true }],
    price: { type: Number, required: true },
    discountedPercentage: { type: Number },
    category: { type: String, required: true },
    brand: { type: String },
    badge: { type: Boolean },
    isAvailable: { type: Boolean },
    offer: { type: Boolean },
    description: { type: String, required: true },
    // ✅ Tags: Array of Strings
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
