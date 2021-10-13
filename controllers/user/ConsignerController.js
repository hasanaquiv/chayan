const Consigner = require("../../models/Consigner");

const index = async (req, res) => {
  const search = req.params.search;
  try {
    let response = "";
    if (search !== "undefined") {
      const searchReg = new RegExp(search, "i");
      response = await Consigner.find({ companyName: searchReg });
    } else {
      response = await Consigner.find({});
    }
    res.status(201).json({ msg: "fetch successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const store = async (req, res) => {
  const {
    location,
    name,
    companyName,
    phone,
    email,
    gstNumber,
    freightCharge,
    fovCharges,
    docketCharges,
    odaCharges,
    fuelCharges,
    toPayCharges,
    volumetric,
    customerType,
    address1,
    address2,
    city,
    state,
    pincode,
    remarks,
  } = req.body;

  try {
    const findId = await Consigner.findOne().sort({ _id: -1 });
    const consignerCode = findId.consignerCode;
    const consignerInc = consignerCode.substr(3);
    const consignerData = `CHC${Number(consignerInc) + Number(1)}`;
    const createStore = new Consigner({
      consignerCode: consignerData,
      location,
      name,
      companyName,
      phone,
      email,
      gstNumber,
      freightCharge,
      fovCharges,
      docketCharges,
      odaCharges,
      fuelCharges,
      toPayCharges,
      volumetric,
      customerType,
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
    const response = await Consigner.findOne({ _id });
    res.status(201).json({ msg: "fetch successfully", response }); 
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const findByCode = async (req, res) => {
  try {
    const consignerCode = req.params.id;
    const response = await Consigner.findOne({ consignerCode });
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
    const response = await Consigner.findByIdAndUpdate(
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
    const response = await Consigner.findByIdAndDelete({ _id });
    res.status(201).json({ msg: "Delete successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

module.exports = { index, store, find, update, destroy, findByCode };
