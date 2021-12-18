const mongoose = require("mongoose");
const finalDate = require("./Date");

const OdrSchema = new mongoose.Schema(
  {
    userId:{type: String},
    odrNumber: {
      type: String,
      require: true,
    },
    deliveryBoy: {
      type: String,
      require: true,
    },
    odrDestination: {
      type: String,
      require: true,
    },
    docketNUmbers: [{ docketNUmber: String }],
    date: { type: String, default: finalDate }
  },
  { timestamps: true }
);

const Odr = new mongoose.model("Odr", OdrSchema);

module.exports = Odr; 
