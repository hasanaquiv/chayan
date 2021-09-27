const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const testSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    order: {
      type: String,
    },
  },
  { timestamps: true }
);

// testSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'order'});
const Test = new mongoose.model("Test", testSchema);

module.exports = Test;
