const Billing = require("../../models/Print");
const Booking = require("../../models/Booking");

const index = async (req, res) => {
  try {
    // const response = await Billing.find().sort({ _id: -1 });
    const response = await Billing.aggregate([ 
      {
        $group: {
          _id: {
            consignerName: "$consignerName",
            month: "$month",
            consigner: "$consigner",
          },
          count: { $sum: 1 },
          total: { $sum: "$total" }
        },
      },
    ]).sort({ _id: 1 }); 
    res.status(201).json({ msg: "fetch successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const store = async (req, res) => {
  try {
    const createStore = new Billing(req.body);
    const response = await createStore.save();
    res.status(201).json({ msg: "Add successfully", response }); 
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const find = async (req, res) => {
  try {
    const consigner = req.params.id; 
    const response = await Billing.find({ consigner });
    res.status(201).json({ msg: "fetch successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = req.body;
    const response = await Billing.findByIdAndUpdate(
      _id,
      { $set: data },
      { new: true }
    );
    res.status(201).json({ msg: "Update successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const destroy = async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await Billing.findByIdAndDelete({ _id });
    res.status(201).json({ msg: "Delete successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

module.exports = { index, store, find, update, destroy };
