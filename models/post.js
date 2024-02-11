const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
  {
    user: String,
    email: String,
    age: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", postSchema);
