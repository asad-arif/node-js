const mongoose = require("mongoose");
const schema = require("../constant/index");

const updateDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecom");
  const productSchema = new mongoose.Schema(schema);
  const Products = mongoose.model("products", productSchema);
  const res = await Products.updateOne(
    { name: "Smartphone" },
    {
      $set: {
        price: 9999,
      },
    }
  );
};

module.exports = updateDB;
