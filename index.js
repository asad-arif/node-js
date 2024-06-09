const mongoose = require("mongoose");
const updateDB = require("./mongoose/update");
const deleteDB = require("./mongoose/delete");
const findDB = require("./mongoose/find");

const main = async () => {
  //   await deleteDB();
  //   await updateDB();
  await findDB();
};

main();
