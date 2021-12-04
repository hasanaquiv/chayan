const nodemailer = require("nodemailer");
const htmlEmail = require("./mail");

const MailSend = async (email,docketNumber) => { 
  const mail = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "hasanaquiv@gmail.com",
      pass: "Aquiv@123",
    },
  });

  const mailOptions = {
    from: "mail@danscherer.com",
    to: "hasanaquiv@chayanlogistics.com",
    replyTo: "noreply@gmail.com",
    subject: "Your order has shipped!",
    html: htmlEmail(docketNumber), 
  };

  try {
    const send = await mail.sendMail(mailOptions);
    return send
  } catch (error) {
    console.error(error); 
  }
};

module.exports = { MailSend };  
