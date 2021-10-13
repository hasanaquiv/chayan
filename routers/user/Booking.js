const express = require("express");
const {
  index,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/user/BookingController"); 

const Router = express.Router();
Router.get("/booking/:search", index);
Router.post("/booking", store);
Router.get("/booking/:id", find);
Router.patch("/booking/:id", update);
Router.delete("/booking/:id", destroy);

module.exports = Router;
