require("dotenv").config();
const express = require("express");
const AuthRouter = require("./routers/AuthRouter");
const Connect = require("./db/Connect");
const Routers = require("./routers");
const path = require("path");

const app = express();

Connect();

app.use(express.json());

const port = process.env.PORT || 5000;

// app.use(AuthRouter);
Routers(app);

// heroku

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("listening on port", port);
});
