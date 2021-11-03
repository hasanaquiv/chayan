const express = require("express");
const { Home, Register, Login, Password } = require("../controllers/AuthController");
const Auth = require("../middlewares/Auth");


const Router = express.Router();

Router.get("/home", Auth, Home);
Router.post("/register", Register); 
Router.post("/login", Login);
Router.patch("/password/:id", Password);

module.exports = Router;
