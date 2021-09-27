const mongoose = require("mongoose");

const Connect = async () => {
  const conn = await mongoose.connect(process.env.MONGODB);
};

module.exports = Connect;
