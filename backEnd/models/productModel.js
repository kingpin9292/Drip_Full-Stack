import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: string, required: true },
  description: { type: string, required: true },
  price: { type: Number, required },
  image: { type: Array, required: true },
  category: { type: string, required: true },
  subCategory: { type: string, required: true },
  sizes: { type: Array, required: true },
  bestSeller: { type: Boolean },
  date: { type: Number, required: true },
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
