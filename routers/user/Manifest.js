const express = require("express");
const {
  index,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/user/ManifestController");

const Router = express.Router();
Router.get("/manifests/:search", index);
Router.post("/manifest", store);
Router.get("/manifest/:id", find);
Router.patch("/manifest/:id", update);
Router.delete("/manifest/:id", destroy);

module.exports = Router;
