const bcrypt = require("bcryptjs");
const User = require("../models/User");
const JwtToken = require("../middlewares/JwtToken");

const Home = async (req, res) => {
  // res.status(201).json(req.user.tokenUser)
  const { tokenUser } = req.user;
  try {
    const user = await User.findOne({ username:tokenUser });
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const Register = async (req, res) => {
  const { name, username, password, location, role } = req.body;
  try {
    const checkUser = await User.findOne({ username });
    if (checkUser) {
      return res.status(302).json("User Already Available");
    }
    const hash = await bcrypt.hash(password, 10);

    const saveUser = new User({ name, username, location, role, password: hash });
    const user = await saveUser.save();

    if (!user) {
      return res.status(402).json({ errors: "Something went wrong" });
    }

    const tokenUser = user.username;
    const token = JwtToken(tokenUser);
    res.status(201).json({ msg: "User Create Successfully", token });
  } catch (error) {
    console.log(error);
  }
};

const Login = async (req, res) => {
  const { username, location, password } = req.body;
  try {
    const user = await User.findOne({ username, location });
    if (!user) {
      return res.status(403).json({ errors: "INvalid User" });
    }
    const verify = await bcrypt.compare(password, user.password);
    if (!verify) {
      return res.status(402).json({ errors: "INvalid User And Password" });
    }

    const tokenUser = user.username;
    const token = JwtToken(tokenUser);
    res.status(201).json({ msg: "User Login Successfully", token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Home, Register, Login };
