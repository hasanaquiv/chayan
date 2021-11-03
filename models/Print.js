const mongoose = require("mongoose");

const printSchema = new mongoose.Schema({
  userId:String,
  docketNumber: String,
  origin: String,
  destination: String,
  consignerName: String,
  month: String,
  consigner: String,
  actualWeight: String,
  chargeWeight: String,
  freightCharge:Number,
  otherCharge:Number,
  gst:String,
  total: Number,
});

const Print = new mongoose.model("Print", printSchema);

module.exports = Print;
