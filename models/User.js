const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    role:{
      type: Number,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", UserSchema);

module.exports = User;
