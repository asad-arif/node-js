const mongoose = require("mongoose");
const schema = require("../constant");
const productSchema = mongoose.Schema(schema);

const findDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1/ecom");
  const Products = mongoose.model("products", productSchema);
  const data = await Products.find({ price: 199.99 });
  console.log(data);
};

module.exports = findDB;
