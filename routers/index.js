const Booking = require("./user/Booking");
const Dashboard = require("./user/Dashboard");
const Manifest = require("./user/Manifest");
const Pod = require("./user/POD");
const Consigner = require("./user/Consigner");
const Consignee = require("./user/Consignee");
const Track = require("./user/Track");
const AuthRouter = require("./AuthRouter"); 
const Test = require("./user/Test");
const PrintDocket = require("./user/PrintDocket");
const Profile = require("./user/Profile");
const Auth = require("../middlewares/Auth");



const Router = (app) => {
  app.use("/api", Booking);
  app.use("/api", Dashboard);
  app.use("/api", Manifest);
  app.use("/api", Pod); 
  app.use("/api", Test); 
  app.use("/api", Consigner);
  app.use("/api", Consignee);
  app.use("/api", Track);
  app.use("/api", AuthRouter); 
  app.use("/api", Profile); 
  app.use("/api", PrintDocket); 
};

module.exports = Router;
