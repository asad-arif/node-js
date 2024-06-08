const { mongoose } = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecom");
  const productSchema = new mongoose.Schema({
    product_name: String,
  });
  const Product = mongoose.model("products", productSchema);
  const data = new Product({ product_name: "New" });
  //   const result = await data.save();

  console.log(data);
};

main();
