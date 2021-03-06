const express = require("express");
const {
  index,
  user,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/user/TrackController");

const Router = express.Router();
Router.get("/track/:search", index);
Router.get("/user-track/:search", user);
Router.post("/track", store);
Router.get("/track/:id", find);
Router.patch("/track/:id", update);
Router.delete("/track/:id", destroy);

module.exports = Router;
