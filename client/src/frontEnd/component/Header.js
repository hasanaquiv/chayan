import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="site-header header-style-1 dark mo-left">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="container">
            <div className="row justify-content-between">
              {/* <div className="dez-topbar-left">
                <ul className="social-bx list-inline pull-right">
                  <li>
                    <Link to="/" className="fa fa-facebook" />
                  </li>
                  <li>
                    <Link to="/" className="fa fa-twitter" />
                  </li>
                  <li>
                    <Link to="/" className="fa fa-linkedin" />
                  </li>
                </ul>
              </div> */}
              <div className="dez-topbar-right list-unstyled e-p-bx "> 
                <ul>
                  <li>
                    <i className="fa fa-envelope" />
                    <span>info@chayanlogistics.com</span>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <span>+91 11-41678277</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Top Bar END*/}
        {/* Main Header */}
        <div className="sticky-header header-curve main-bar-wraper navbar-expand-lg">
          <div className="main-bar bg-primary clearfix ">
            <div className="container clearfix">
              {/* Website Logo */}
              <div className="logo-header mostion">
                <a href="/">
                  <img
                    src={require("../../asset/images/logo.png").default}
                    width={193}
                    height={89}
                    alt="logo"
                  />
                </a>
              </div>
              {/* Nav Toggle Button */}
              <button
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span />
                <span />
                <span />
              </button>
              {/* Main Nav */}
              <div
                className="header-nav navbar-collapse collapse justify-content-end"
                id="navbarNavDropdown"
              >
                <ul className="nav navbar-nav">
                  <li className="active">
                    {" "}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="javascript;">
                      Services
                      <i className="fa fa-chevron-down" />
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/logistics">Logistics</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li><Link to="/docket-track" className="text-waring">Track</Link></li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* Main Header END */}
      </header>
    </>
  );
};

export default Header;
