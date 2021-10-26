const Manifest = require("../../models/Manifest");

const index = async (req, res) => {
  const search = req.params.search;
  try {
    let response = "";
    if (search !== "undefined") {
      const searchReg = new RegExp(search, "i");
      response = await Manifest.find({manifestNumber: searchReg}).sort({ _id: -1 });
    } else {
      response = await Manifest.find().sort({ _id: -1 });
    }
    res.status(201).json({ msg: "fetch successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const store = async (req, res) => {
  const { manifestOrigin, manifestDestination, docketNUmbers } = req.body;
  const docketNUmberArr = docketNUmbers.split(",");
  const data = docketNUmberArr.map((value) => {
    return { docketNUmber: value };
  });
  try {
    const findId = await Manifest.findOne().sort({ _id: -1 });
    const oldManifestNumber = findId.manifestNumber;
    const manifestInc = oldManifestNumber.substr(6);
    const manifestData = `CHM${Number(manifestInc) + Number(1)}`;
    const createStore = new Manifest({
      manifestNumber: manifestData,
      manifestOrigin,
      manifestDestination,
      docketNUmbers: data,
      start:"Docket Shipped"
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
    const response = await Manifest.findOne({ _id });
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
      manifestOrigin,
      manifestDestination,
      driverName,
      vehicleNumber,
      docketNUmbers,
    } = req.body;
    const docketNUmberArr = docketNUmbers.split(",");
    const datav = docketNUmberArr.map((value) => {
      return { docketNUmber: value };
    });

    const data = {
      manifestOrigin,
      manifestDestination,
      driverName,
      vehicleNumber,
      docketNUmbers: datav,
    };
    const response = await Manifest.findByIdAndUpdate(
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
    const response = await Manifest.findByIdAndDelete({ _id });
    res.status(201).json({ msg: "Delete successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

module.exports = { index, store, find, update, destroy };
