const mongoose = require("mongoose");
const finalDate = require("./Date");
const BookingSchema = new mongoose.Schema(
  {
    userId:{type: String},
    docketNumber: {
      type: String,
      require: true,
    },
    origin: {
      type: String,
      require: true,
    },
    destination: {
      type: String,
      require: true,
    },
    consigner: {
      type: String,
      require: true,
    },
    consignee: {
      type: String,
      require: true,
    },
    box:{      
      type: Number,
      require: true,
    },
    actualWeight:{
      type: Number,
      require: true,
    },
    chargeWeight: {
      type: Number,
      require: true,
    },
    invoiceNo: {
      type: String,
      require: true,
    },
    invoiceAmount: {
      type: Number,
      require: true,
    },
    waybill: {
      type: String,
      require: true,
    },
    paymentMode: {
      type: String,
      require: true,
    },
    pickupBranch: {
      type: String,
      require: true,
    },
    remarks: {
      type: String,
    },
    handling: {
      type: String,
    },
    date: { type: String, default: finalDate },
  },
  {
    toObject: { virtuals: true },
  },
  { timestamps: true }
);

const Booking = new mongoose.model("Booking", BookingSchema);

module.exports = Booking;
