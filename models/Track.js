const mongoose = require("mongoose");
const finalDate = require("./Date");

const TrackSchema = new mongoose.Schema(
  {
    userId:{type: String},
    driverName: {
      type: String,
      require: true,
    },
    vehicleNumber: {
      type: String,
      require: true,
    },
    locations: [
      {
        location: String,
        start: {
          type: String,
        },
        date: { type: String, default: finalDate },
      },
    ],
    manifestNUmbers: [{ manifestNUmber: String }],
  },
  { timestamps: true }
);

const Track = new mongoose.model("Track", TrackSchema);

module.exports = Track;
