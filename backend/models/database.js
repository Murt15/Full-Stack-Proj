const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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

module.exports = mongoose.model("database", databaseSchema);
