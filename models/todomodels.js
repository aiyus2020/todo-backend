const mongoose = require("mongoose");

const TodoScheme = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", TodoScheme);
