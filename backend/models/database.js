//importing monogoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//defining  database model
const databaseSchema = new Schema({
  Module: {
    type: String,
  },
  Tab: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  heading: {
    type: String,
  },
  text: {
    type: String,
  },
});
//exporting database model
module.exports = mongoose.model("database", databaseSchema);
