// C:\Web Development\mern-ecommerce\server\middleware\multer.js

import multer from "multer";

// ✅ Memory Storage ব্যবহার করা হলো
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
