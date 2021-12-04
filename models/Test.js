const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

function oderNum(order) {
  return "CHM"+order
}

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
      type: Number
    },
  },
  { timestamps: true }
);

// testSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'order'});
testSchema.pre("save", async function (next) {
  const res = await this.model.find()
  console.log(res)
});
const Test = new mongoose.model("Test", testSchema);

module.exports = Test;
