const mongoose = require("mongoose");

const MAnifestSchema = new mongoose.Schema(
  {
    manifestNumber: {
      type: String,
      require: true,
    },
    manifestOrigin: {
      type: String,
      require: true,
    },
    manifestDestination: {
      type: String,
      require: true,
    },
    docketNUmbers: [{ docketNUmber: String }],
  },
  { timestamps: true }
);

const MAnifest = new mongoose.model("MAnifest", MAnifestSchema);

module.exports = MAnifest;
