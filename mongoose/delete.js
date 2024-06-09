const mongoose = require("mongoose");
const schema = require("../constant/index");

const productSchema = mongoose.Schema(schema);

const deleteDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1/ecom");
  const Products = mongoose.model("products", productSchema);
  const res = await Products.deleteOne({ name: "Smartphone" });
  console.log(res);
};

module.exports = deleteDB;
