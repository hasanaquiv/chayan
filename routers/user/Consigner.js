const express = require("express");
const {
  index,
  store,
  find,
  findByCode,
  update,
  destroy,
} = require("../../controllers/user/ConsignerController"); 

const Router = express.Router();
Router.get("/consigners/:search", index); 
Router.post("/consigner", store);
Router.get("/consigner/:id", find);
Router.get("/consigner-code/:id", findByCode);
Router.patch("/consigner/:id", update);
Router.delete("/consigner/:id", destroy);

module.exports = Router;
