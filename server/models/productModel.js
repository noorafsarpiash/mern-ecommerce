import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  _type: { type: String },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  discountedPercentage: { type: Number },
  category: { type: String, required: true },
  brand: { type: String },
  badge: { type: Boolean },
  isAvailable: { type: Boolean },
  offer: { type: Boolean },
  description: { type: String, required: true },
  tags: { type: Array },
});
const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default productModel;
