const mongoose = require("mongoose");
const finalDate = require("./Date");

const MAnifestSchema = new mongoose.Schema(
  {
    userId:{type: String},
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
    date: { type: String, default: finalDate },
    end: {type: String}
  },
  { timestamps: true }
);

const MAnifest = new mongoose.model("MAnifest", MAnifestSchema);

module.exports = MAnifest; 
