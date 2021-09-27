const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema(
  {
    driverName: {
      type: String,
      require: true,
    },
    vehicleNumber: {
      type: String,
      require: true,
    },    
    locations: [{location: String}],
    manifestNUmbers: [{ manifestNUmber: String }],
  },
  { timestamps: true }
);

const Track = new mongoose.model("Track", TrackSchema);

module.exports = Track;
