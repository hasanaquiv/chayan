const express = require("express");
const multer = require("multer");

const {
  index,
  store,
  find,
  update,
  destroy,
} = require("../../controllers/user/PODController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

const Router = express.Router();
Router.get("/pod/:search", index);
Router.post("/pod", upload.single("podFile"), store);
Router.get("/pod/:id", find);
Router.patch("/pod/:id", update);
Router.delete("/pod/:id", destroy);

module.exports = Router;
