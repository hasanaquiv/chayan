const Booking = require("../../models/Booking");

const index = async (req, res) => {
  try {
    const response = await Booking.find({});
    res.status(201).json({ msg: "fetch successfully2", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const store = async (req, res) => {
  const {
    origin,
    destination,
    consigner,
    consignee,
    billTo,
    actualWeight,
    chargeWeight,
    invoiceNo,
    invoiceAmount,
    waybill,
    paymentMode,
    pickupBranch,
    remarks,
    handling,
  } = req.body;
  try {
    const findId = await Booking.findOne().sort({ _id: -1 });
    const docketNumber = findId.docketNumber;
    const docketInc = docketNumber.substr(3);
    const docketData = `CHD${Number(docketInc) + Number(1)}`;
    const createStore = new Booking({
      docketNumber: docketData,
      origin,
      destination,
      consigner,
      consignee,
      billTo,
      actualWeight,
      chargeWeight,
      invoiceNo,
      invoiceAmount,
      waybill,
      paymentMode,
      pickupBranch,
      remarks,
      handling,
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
    const responseId = await Booking.findOne({ _id });
    const response = await Booking.aggregate([
      { $match: { consigner: responseId.consigner } },
      {
        $lookup: {
          from: "consigners",
          localField: "consigner",
          foreignField: "consignerCode",
          as: "consignerDetails",
        },
      },
      {$unwind: '$consignerDetails'},
      { $limit: 1 }
    ]);
    const data = response[0]
    res.status(201).json({ msg: "fetch successfully", data });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = req.body;
    const response = await Booking.findByIdAndUpdate(
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
    const response = await Booking.findByIdAndDelete({ _id });
    res.status(201).json({ msg: "Delete successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

module.exports = { index, store, find, update, destroy };
