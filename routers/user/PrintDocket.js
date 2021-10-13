const express = require("express");
const {
  index,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/user/PrintDocket");  

const Router = express.Router();
Router.get("/print-docket", index);
Router.post("/print-docket", store);
Router.get("/print-docket/:id", find);
Router.patch("/booking/:id", update);
Router.delete("/booking/:id", destroy);

module.exports = Router;
