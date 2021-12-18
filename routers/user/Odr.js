const express = require("express");
const {
  index,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/user/OdrController");

const Router = express.Router();
Router.get("/odrs/:search", index);
Router.post("/odr", store);
Router.get("/odr/:id", find);
Router.patch("/odr/:id", update);
Router.delete("/odr/:id", destroy);

module.exports = Router;
