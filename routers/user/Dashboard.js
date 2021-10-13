const express = require("express");
const { index } = require("../../controllers/user/DashboardController");
const Auth = require("../../middlewares/Auth");

const Router = express.Router();
Router.get("/dashboard", index);

module.exports = Router;
