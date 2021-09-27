const express = require("express");
const {
  index,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/user/ConsignerController");

const Router = express.Router();
Router.get("/consigner", index); 
Router.post("/consigner", store);
Router.get("/consigner/:id", find);
Router.patch("/consigner/:id", update);
Router.delete("/consigner/:id", destroy);

module.exports = Router;
