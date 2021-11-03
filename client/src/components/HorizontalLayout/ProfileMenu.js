import { useState, useEffect } from "react";

import jwtDecode from "jwt-decode";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../store/reducers/userReducer";

// users
import user4 from "../../asset/images/testimonials/male.png";

const ProfileMenu = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const dispatch = useDispatch();
  const { username, loader, response } = useSelector((state) => state.users);

  const t = localStorage.getItem("authUser");

  const verify = jwtDecode(t);

  useEffect(() => {
    var dateNow = new Date();
    if (verify.exp < dateNow.getTime() / 1000) {
      alert("Session expired");
      dispatch(logoutAction());
      if (response === "logout") {
        props.history.push("/login");
        window.location.reload();
      }
    }
  },[dispatch, props.history, response, verify.exp]);

  // useEffect(() => {
  //   if (username === "token Expired") {
  //     dispatch(logoutAction());
  //     if (response === "logout") {
  //       props.history.push("/login");
  //     }
  //   }
  // }, [dispatch, props.history, response, username]);

  return (
    <>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user4}
            alt="Header Avatar"
          />{" "}
          <span className="d-none d-xl-inline-block ms-1">
            {!loader ? username.name : "Loading..."}
          </span>{" "}
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>{" "}
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          {/* <DropdownItem tag="a" href="/profile">
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1"></i> View
            Profile{" "}
          </DropdownItem> */}
          <DropdownItem tag="a" href="/password">
            <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
            Password
          </DropdownItem>
          <div className="dropdown-divider" />
          <Link to="/logout" className="dropdown-item text-danger">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
            <span>Logout</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default ProfileMenu;
