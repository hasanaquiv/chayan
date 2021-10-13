const express = require("express");
const {
  index,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/user/BillingController"); 

const Router = express.Router();
Router.get("/billing", index);
Router.post("/billing", store);
Router.get("/billing/:id", find);
Router.patch("/billing/:id", update);
Router.delete("/billing/:id", destroy);

module.exports = Router;
