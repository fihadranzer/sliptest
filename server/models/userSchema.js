const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },
  item: { type: String, required: true },

  itemqty: { type: String, required: true },

  totalprice: {
    type: Number,
    required: true,
  },
  ref: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },

});

const users = new mongoose.model("users", userSchema);

module.exports = users;
