const bcrypt = require("bcryptjs");
const User = require("../models/User");
const JwtToken = require("../middlewares/JwtToken");

const Register = async (req, res) => {
  const { name, username, password, location, role } = req.body;
  try {
    const checkUser = await User.findOne({ username });
    if (checkUser) {
      return res.status(302).json("User Already Available");
    }
    const hash = await bcrypt.hash(password, 10);

    const saveUser = new User({
      name,
      username,
      location,
      role,
      password: hash,
    });
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
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ msg: "INvalid User" });
    }
    const verify = await bcrypt.compare(password, user.password);
    if (!verify) {
      return res.json({ msg: "INvalid User And Password" });
    }

    if(verify){      
    const tokenUser = user.username;
    const token = JwtToken(tokenUser);
    res.status(201).json({ msg: "User Login Successfully", token, role: user.role });
    } 
  } catch (error) {
    console.log(error);
  }
};

const Home = async (req, res) => {
  const { tokenUser } = req.user;
  try {
    const user = await User.findOne({ username: tokenUser });
    if (user) {
      res.status(201).json({ user });
    } else {
      res.json({ user: "token Expired" });
    }
  } catch (error) {
    console.log(error);
  }
};

const Password = async (req, res) => {
  const { password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const _id = req.params.id;
    const response = await User.findByIdAndUpdate(
      _id,
      {
        $set: {
          password: hash
        },
      },
      { new: true }
    );
    console.log(response);
    res.json({ msg: "Password Update Successful" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Home, Register, Login, Password };
