const express = require("express");
const {
  index,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/user/PODController");

const Router = express.Router();
Router.get("/pod/:search", index);
Router.post("/pod", store);
Router.get("/pod/:id", find);
Router.patch("/pod/:id", update);
Router.delete("/pod/:id", destroy);

module.exports = Router;
