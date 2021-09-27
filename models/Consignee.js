const mongoose = require("mongoose");
 
const ConsigneeSchema = new mongoose.Schema(
  {
    consigneeCode:{
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    companyName: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    gstNumber: {
      type: String
    },
    address1: {
      type: String,
      require: true,
    },
    address2: {
      type: String
    },
    city: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    pincode: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Consignee = new mongoose.model("Consignee", ConsigneeSchema);

module.exports = Consignee;
