const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    /*   required: true, */
  },
  email: {
    type: String,
    unique: true,
    /*   required: true, */
  },
  password: {
    type: String,

    /*   required: true, */
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  /*  price: {
    type: Number,
    required: true,
  }, */
});

module.exports = User = mongoose.model("user", UserSchema);