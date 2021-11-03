const mongoose = require("mongoose");

const PodSchema = new mongoose.Schema(
  {
    userId:{type: String},
    docketNumber: {
      type: String,
      require: true,
    },
    receiverName: {
      type: String,
      require: true,
    },
    receiverMobile: {
      type: Number,
      require: true,
    },
    podFile:{
      type: String,
    },
    status: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Pod = new mongoose.model("Pod", PodSchema);

module.exports = Pod;
