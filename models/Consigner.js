const mongoose = require("mongoose");
 
const ConsignerSchema = new mongoose.Schema(
  {
    userId:{type: String},
    consignerCode:{
      type: String,
      require: true,
    },
    location:{
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
      type: String,
      require: true,
    },
    freightCharge: {
      type: Number,
      require: true,
    },
    fovCharges: {
      type: Number
    },
    docketCharges: {
      type: Number
    },
    odaCharges: {
      type: Number
    },
    fuelCharges: {
      type: Number
    },
    toPayCharges: {
      type: Number
    },
    customerType:{
      type: String
    },
    volumetric:{
      type: Number,
      require: true,
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

const Consigner = new mongoose.model("Consigner", ConsignerSchema);

module.exports = Consigner;
