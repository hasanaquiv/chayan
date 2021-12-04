const {MailSend} = require("./SendMail");

const index = async (req, res) => {
  const { name, email, massage } = req.body;
  const send = MailSend(name, email,)

  console.log(send)
};

module.exports = { index };
