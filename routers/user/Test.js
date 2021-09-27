const express = require("express");
const {
  index,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/Test");

const Router = express.Router();
Router.get("/test", index);
Router.post("/test", store);
Router.get("/test/:id", find);
Router.patch("/test/:id", update);
Router.delete("/test/:id", destroy);

module.exports = Router;
