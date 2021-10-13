const express = require("express");
const {
  index,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/user/ConsigneeController");

const Router = express.Router();
Router.get("/consignee/:search", index); 
Router.post("/consignee/", store);
Router.get("/consignee/:id", find);
Router.patch("/consignee/:id", update);
Router.delete("/consignee/:id", destroy);

module.exports = Router;
