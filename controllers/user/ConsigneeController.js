const Consignee = require("../../models/Consignee");

const index = async (req, res) => {
  try {
    const response = await Consignee.find({});
    res.status(201).json({ msg: "fetch successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const store = async (req, res) => {
  const {
    name,
    companyName,
    phone,
    email,
    gstNumber,
    address1,
    address2,
    city,
    state,
    pincode,
  } = req.body;

  try {
    const findId = await Consignee.findOne().sort({ _id: -1 });
    const consigneeCode = findId.consigneeCode;
    const consigneeInc = consigneeCode.substr(3);
    const consigneeData = `CHD${Number(consigneeInc) + Number(1)}`;
    const createStore = new Consignee({
      consigneeCode: consigneeData,
      name,
      companyName,
      phone,
      email,
      gstNumber,
      address1,
      address2,
      city,
      state,
      pincode,
    });
    const response = await createStore.save();
    res.status(201).json({ msg: "Add successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const find = async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await Consignee.findOne({ _id });
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
    const response = await Consignee.findByIdAndUpdate(
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
    const response = await Consignee.findByIdAndDelete({ _id });
    res.status(201).json({ msg: "Delete successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

module.exports = { index, store, find, update, destroy };
