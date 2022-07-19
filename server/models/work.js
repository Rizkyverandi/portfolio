const mongoose = require("mongoose");

const workSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  desc: String,
  link: String,
  img: String,
  progress: String,
});
const Work = mongoose.model("Work", workSchema, "work");

module.exports = Work;
