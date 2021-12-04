const express = require("express");
const {
  index,
} = require("../../controllers/user/MailController"); 

const Router = express.Router();
Router.get("/mail", index);

module.exports = Router;
