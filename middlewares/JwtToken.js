const jwt = require("jsonwebtoken");

const JwtTokwn = (tokenUser) => {
  return jwt.sign({ tokenUser }, process.env.SECRET, { expiresIn: "24h" });
};

module.exports = JwtTokwn;
