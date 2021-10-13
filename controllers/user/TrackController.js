const Track = require("../../models/Track");

const index = async (req, res) => {
  const search = req.params.search;
  try {
    let response = "";
    if (search !== "undefined") {
      const searchReg = new RegExp(search, "i");
      response = await Track.find({vehicleNumber: searchReg}).sort({ _id: -1 });
    } else {
      response = await Track.find().sort({ _id: -1 });
    }
    res.status(201).json({ msg: "fetch successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const store = async (req, res) => {
  const { driverName, vehicleNumber, manifestNUmbers, locations } = req.body;
  const manifestNUmberArr = manifestNUmbers.split(",");
  const data = manifestNUmberArr.map((value) => {
    return { manifestNUmber: value };
  });
  const locationData = { location: locations };
  try {
    const createStore = new Track({
      driverName,
      vehicleNumber,
      manifestNUmbers: data,
      locations: locationData,
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
    const vehicleNumber = req.params.id;
    const response = await Track.findOne({ vehicleNumber });
    res.status(201).json({ msg: "fetch successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const vehicleNumber = req.params.id;
    const { manifestNUmbers, locations } = req.body;
    const manifestNUmberArr = manifestNUmbers.split(",");
    const data = manifestNUmberArr.map((value) => {
      return { manifestNUmber: value };
    });

    const locationData = { location: locations };
    const response = await Track.updateOne(
      { vehicleNumber: vehicleNumber },
      {
        $push: { manifestNUmbers: data, locations: locationData },
      }
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
    const response = await Track.findByIdAndDelete({ _id });
    res.status(201).json({ msg: "Delete successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

module.exports = { index, store, find, update, destroy };
