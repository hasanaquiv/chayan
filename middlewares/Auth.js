const Jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const verify = Jwt.verify(token, process.env.SECRET);
    req.user = verify;
    next();
  } catch (err) {    
    console.log(err);
    res.status(403).json({error:"jwt token expired"});
    next()
  }
};

module.exports = Auth;

