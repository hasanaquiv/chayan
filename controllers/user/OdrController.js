const Odr = require("../../models/Odr");

const index = async (req, res) => {
  const search = req.params.search;
  try {
    let response = "";
    if (search !== "undefined") {
      const searchReg = new RegExp(search, "i");
      response = await Odr.find({odrNumber: searchReg}).sort({ _id: -1 });
    } else {
      response = await Odr.find().sort({ _id: -1 });
    }
    res.status(201).json({ msg: "fetch successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const store = async (req, res) => {
  const { deliveryBoy, odrDestination, docketNUmbers } = req.body;
  const docketNUmberArr = docketNUmbers.split(",");
  const data = docketNUmberArr.map((value) => {
    return { docketNUmber: value };
  });
  try {
    const findId = await Odr.findOne().sort({ _id: -1 });
    const oldOdrNumber = findId.odrNumber;
    const odrInc = oldOdrNumber.substr(3);
    const odrData = `CHO${Number(odrInc) + Number(1)}`;
    const createStore = new Odr({
      odrNumber: odrData,
      deliveryBoy,
      odrDestination,
      docketNUmbers: data,
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
    const response = await Odr.findOne({ _id });
    res.status(201).json({ msg: "fetch successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const _id = req.params.id;
    // const data = req.body;
    const {
      deliveryBoy,
      odrDestination,
      driverName,
      vehicleNumber,
      docketNUmbers,
    } = req.body;
    const docketNUmberArr = docketNUmbers.split(",");
    const datav = docketNUmberArr.map((value) => {
      return { docketNUmber: value };
    });

    const data = {
      deliveryBoy,
      odrDestination,
      driverName,
      vehicleNumber,
      docketNUmbers: datav,
    };
    const response = await Modr.findByIdAndUpdate(
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
    const response = await Modr.findByIdAndDelete({ _id });
    res.status(201).json({ msg: "Delete successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

module.exports = { index, store, find, update, destroy };
 