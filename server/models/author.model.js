const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name."],
    minLength: [3, "Name must be at least 3 characters!"],
  },
  isAmerican: {
    type: Boolean
  },
  cover: {
    type: String,
    required: [true, 'Please enter URL of image.']
  }
}, { timestamps: true });

const Author = mongoose.model('Author', authorSchema)
module.exports = Author