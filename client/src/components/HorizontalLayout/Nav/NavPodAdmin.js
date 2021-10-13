import { Link } from "react-router-dom";

const NavPodAdmin = () => {
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
            <Link className="nav-link dropdown-toggle" to="/add-pod">
              Add POD
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
};

export default NavPodAdmin;
