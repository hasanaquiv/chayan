import { useEffect } from "react";

import {auth} from "../../store/actions/loginAction";

import {useDispatch} from "react-redux";

import { Link } from "react-router-dom";

// Import menuDropdown
import NotificationDropdown from "./NotificationDropdown";
import ProfileMenu from "./ProfileMenu";

import logo from "../../assets/images/logo-sm.png";
import logoDark from "../../assets/images/chyan-logistics.png";

import Navbar from "./Navbar";

const Header = (props) => {
  const isMenuOpened = "false";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth()) 
  }, [dispatch]);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  return (
    <>
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link to="/" className="logo logo-dark">
              <span className="logo-sm">
                <img src={logo} alt="" height="20" />
              </span>
              <span className="logo-lg">
                <img src={logoDark} alt="" height="38" />
              </span>
            </Link>

            <Link to="/" className="logo logo-light">
              <span className="logo-sm">
                <img src={logo} alt="" height="20" />
              </span>
              <span className="logo-lg">
                <img src={logoDark} alt="" height="38" />
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
            data-toggle="collapse"
            onClick={() => {
              props.toggleLeftmenu(!props.leftMenu);
            }}
            data-target="#topnav-menu-content"
          >
            <i className="fa fa-fw fa-bars" />
          </button>

          <Navbar menuOpen={isMenuOpened} />
        </div>
        <div className="d-flex">
          <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              onClick={() => {
                toggleFullscreen();
              }}
              data-toggle="fullscreen"
            >
              <i className="mdi mdi-fullscreen"></i>
            </button>
          </div>

          <NotificationDropdown />

          <ProfileMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
