import React from "react";

import Home from "../pages/Dashboard/Home";


import Test from "../pages/test/Test";

import { Redirect } from "react-router-dom";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import Booking from "../pages/Booking/Booking";
import Bookings from "../pages/Booking/Bookings";
import BookingUpdate from "../pages/Booking/BookingUpdate";
import PrintDocket from "../pages/Booking/PrintDocket";
import Consigner from "../pages/Consigner/Consigner";
import Consigners from "../pages/Consigner/Consigners";
import Manifests from "../pages/Manifest/Manifests";
import AddManifest from "../pages/Manifest/AddManifest";
import Tracks from "../pages/Manifest/Tracks";
import Tracking from "../pages/Manifest/Tracking";
import AddTracking from "../pages/Manifest/AddTracking";
import UpdateTracking from "../pages/Manifest/UpdateTracking";
import PODS from "../pages/Manifest/PODS";
import AddPod from "../pages/POD/AddPod";

// Admin
import Admin from "../pages/Admin/Admin";
import Admins from "../pages/Admin/Admins";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

const userRoutes = [
  { path: "/dashboard", component: Dashboard }, 
  { path: "/booking-new", component: Booking },
  { path: "/consigner-add", component: Consigner },
  { path: "/bookings", component: Bookings },
  { path: "/booking-update/:id", component: BookingUpdate },
  { path: "/print-docket/:id", component: PrintDocket },
  { path: "/consigners", component: Consigners },
  { path: "/manifests", component: Manifests },
  { path: "/manifest-add", component: AddManifest },
  { path: "/tracks", component: Tracks },
  { path: "/tracking/:id", component: Tracking },
  { path: "/tracking-add", component: AddTracking },
  { path: "/tracking-update/:id/:vehicleNumber", component: UpdateTracking },
  { path: "/pods", component: PODS },
  { path: "/add-pod", component: AddPod },
  { path: "/home/:id", component: Home, }, 

  //Admin
  { path: "/add-admin", component: Admin },
  { path: "/view-admin", component: Admins },
  { path: "/admin/test", component: Test },

  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
];

export { userRoutes, authRoutes };
