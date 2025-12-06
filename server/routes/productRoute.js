import express from "express";
import {
  addProduct,
  removeProduct,
  listProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const productRoute = express.Router();

productRoute.post(
  "/add",
  upload.fields([{ name: "image1", maxCount: 1 }]),
  addProduct
);
productRoute.post("/remove", removeProduct);
productRoute.get("/list", listProduct);
productRoute.get("/single", singleProduct);

export default productRoute;
