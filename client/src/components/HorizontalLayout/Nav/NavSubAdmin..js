import { useState } from "react";
import { Link } from "react-router-dom";
import classname from "classnames";

const NavSubAdmin = (props) => {
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
              Booking
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
            <Link className="nav-link arrow-none" to="/consigners">
              Consigners
            </Link>
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
              Manifest
            </Link>
            <div className={classname("dropdown-menu", { show: dashboard })}>
              <Link to="/manifest-add" className="dropdown-item">
                Add Manifest
              </Link>
              <Link to="/manifests" className="dropdown-item">
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
              Track
            </Link>
            <div className={classname("dropdown-menu", { show: dashboard })}>
              <Link to="/tracks" className="dropdown-item">
                Track
              </Link>
              <Link to="/tracking-add" className="dropdown-item">
                Tracking Add
              </Link>
              <Link to="/pods" className="dropdown-item">
                POD
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
};

export default NavSubAdmin;
