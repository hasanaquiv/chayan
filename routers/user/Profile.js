const express = require("express");
const Auth = require("../../middlewares/Auth");

const {
  index,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/user/ProfileController");

const Router = express.Router(); 
Router.get("/user", Auth, index);
Router.post("/user", store);
Router.get("/user/:id", Auth, find); 
Router.patch("/user/:id", update);
Router.delete("/user/:id", destroy);

module.exports = Router;
