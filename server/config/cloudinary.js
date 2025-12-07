// C:\Web Development\mern-ecommerce\server\config\connectCloudinary.js

import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = () => {
  // ✅ এখানে ব্যবহৃত নামগুলো অবশ্যই .env ফাইলের নামের সাথে মিলতে হবে
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // <- .env এ এই নামটিই ব্যবহার করা উচিত
  });
};

export default connectCloudinary;
