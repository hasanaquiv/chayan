import { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import classname from "classnames";


const Navbar = (props) => {
  const [dashboard, setdashboard] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });
  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <>
      <div className="topnav">
        <nav
          className="navbar navbar-light navbar-expand-lg topnav-menu"
          id="navigation"
        >
          <Collapse
            isOpen={props.leftMenu}
            className="navbar-collapse"
            id="topnav-menu-content"
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
                    setdashboard(!dashboard);
                  }}
                  to="view-all"
                >
                  Booking <div className="arrow-down"></div>
                </Link>
                <div
                  className={classname("dropdown-menu", { show: dashboard })}
                >
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
                    setdashboard(!dashboard);
                  }}
                  to="dashboard"
                >
                  Consigner <div className="arrow-down"></div>
                </Link>
                <div
                  className={classname("dropdown-menu", { show: dashboard })}
                >
                  <Link to="/consigner-add" className="dropdown-item">
                    Add new
                  </Link>

                  <Link to="/consigners" className="dropdown-item">
                    View All
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle arrow-none"
                  onClick={(e) => {
                    e.preventDefault();
                    setdashboard(!dashboard);
                  }}
                  to="dashboard"
                >
                  Manifest <div className="arrow-down"></div>
                </Link>
                <div
                  className={classname("dropdown-menu", { show: dashboard })}
                >
                  <Link to="/manifests" className="dropdown-item">
                    View All
                  </Link>

                  <Link to="/tracks" className="dropdown-item">
                    Track
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
                    setdashboard(!dashboard);
                  }}
                  to="dashboard"
                >
                  Sub Admin <div className="arrow-down"></div>
                </Link>
                <div
                  className={classname("dropdown-menu", { show: dashboard })}
                >
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
                    setdashboard(!dashboard);
                  }}
                  to="dashboard"
                >
                  Extra Pages <div className="arrow-down"></div>
                </Link>
                <div
                  className={classname("dropdown-menu", { show: dashboard })}
                >
                  <Link to="/manifest-add" className="dropdown-item">
                    Add Manifest
                  </Link>
                  <Link to="/tracking" className="dropdown-item">
                    Tracking
                  </Link>
                  <Link to="/tracking-add" className="dropdown-item">
                    Tracking Add
                  </Link>
                  <Link to="/tracking-update" className="dropdown-item">
                    Tracking Update
                  </Link>
                  <Link to="/add-pod" className="dropdown-item">
                    Add POD
                  </Link>
                </div>
              </li>
            </ul>
          </Collapse>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
