const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    Dashboardname: {
      type: String,
      require: true,
    },
    area: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Dashboard = new mongoose.model("Dashboard", DashboardSchema);

module.exports = Dashboard;
