import { useState } from "react";
import { Link } from "react-router-dom";
import classname from "classnames";

const NavAdmin = (props) => {
  const [dashboard, setDashboard] = useState(false);
  return (
    <>
      <div className="topnav">
        <nav
          className="navbar navbar-light navbar-expand-lg topnav-menu"
          id="navigation"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle arrow-none"
                onClick={(e) => {
                  e.preventDefault();
                  setDashboard(!dashboard);
                }}
                to="view-all"
              >
                Booking <div className="arrow-down"></div>
              </Link>
              <div className={classname("dropdown-menu", { show: dashboard })}>
                <Link to="/booking-new" className="dropdown-item">
                  Add new
                </Link>
                <Link to="/bookings" className="dropdown-item">
                  View All
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle arrow-none"
                onClick={(e) => {
                  e.preventDefault();
                  setDashboard(!dashboard);
                }}
                to="dashboard"
              >
                Consigner <div className="arrow-down"></div>
              </Link>
              <div className={classname("dropdown-menu", { show: dashboard })}>
                <Link to="/consigner-add" className="dropdown-item">
                  Add new
                </Link>

                <Link to="/consigners" className="dropdown-item">
                  View All
                </Link>
                <Link to="/consignees" className="dropdown-item">
                  Consignee View
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle arrow-none"
                onClick={(e) => {
                  e.preventDefault();
                  setDashboard(!dashboard);
                }}
                to="dashboard"
              >
                Manifest <div className="arrow-down"></div>
              </Link>
              <div className={classname("dropdown-menu", { show: dashboard })}>
                <Link to="/manifest-add" className="dropdown-item">
                  Add Manifest
                </Link>
                <Link to="/manifests" className="dropdown-item">
                  View All
                </Link>

                <Link to="/pods" className="dropdown-item">
                  POD
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle arrow-none"
                onClick={(e) => {
                  e.preventDefault();
                  setDashboard(!dashboard);
                }}
                to="dashboard"
              >
                Track <div className="arrow-down"></div>
              </Link>
              <div className={classname("dropdown-menu", { show: dashboard })}>
                <Link to="/tracking-add" className="dropdown-item">
                  Tracking Add
                </Link>
                <Link to="/tracks" className="dropdown-item">
                  View All
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle arrow-none"
                onClick={(e) => {
                  e.preventDefault();
                  setDashboard(!dashboard);
                }}
                to="dashboard"
              >
                Sub Admin <div className="arrow-down"></div>
              </Link>
              <div className={classname("dropdown-menu", { show: dashboard })}>
                <Link to="/add-admin" className="dropdown-item">
                  Add Admin
                </Link>

                <Link to="/view-admin" className="dropdown-item">
                  View All
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle arrow-none"
                onClick={(e) => {
                  e.preventDefault();
                  setDashboard(!dashboard);
                }}
                to="dashboard"
              >
                Billing <div className="arrow-down"></div>
              </Link>
              <div className={classname("dropdown-menu", { show: dashboard })}>
                <Link to="/add-pod" className="dropdown-item">
                  Add POD
                </Link>
                <Link to="/billings" className="dropdown-item">
                  All Billings
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavAdmin;
