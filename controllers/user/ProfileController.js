const User = require('../../models/User')

const index = async (req, res) => {
  try{
  const response = await User.find({});
  res.status(201).json({ msg: "fetch successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const store = async (req, res) => {
  try {
    const createStore = new User(req.body);
    const response = await createStore.save();
    res.status(201).json({ msg: "Add successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

const find = async (req, res) => {
  try{
  const username = req.params.username;
  const response = await User.findOne({ });
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
    const response = await User.findByIdAndUpdate(
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
    const response = await User.findByIdAndDelete({ _id });
    res.status(201).json({ msg: "Delete successfully", response });
  } catch (error) {
    res.status(501).json({ errors: error });
    console.log(error);
  }
};

module.exports = { index, store, find, update, destroy };
