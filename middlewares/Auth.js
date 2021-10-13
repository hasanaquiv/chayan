const Jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const verify = Jwt.verify(token, process.env.SECRET);
    var dateNow = new Date();
    if (verify.exp > dateNow.getTime()) {
      req.user = {tokenUser:"InvalidToken"}
    } else {
      req.user = verify;
    }
    next();
  } catch (err) {
    // console.log(err);
    next();
  }
};

module.exports = Auth;
