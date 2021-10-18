const Header = () => {
  return (
    <>
      <div className="page-wraper">
        <div id="loading-area" />
        {/* Header */}
        <header className="site-header header-style-1 dark mo-left">
          {/* Top Bar */}
          <div className="top-bar">
            <div className="container">
              <div className="row justify-content-between">
                <div className="dez-topbar-left">
                  <ul className="social-bx list-inline pull-right">
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="fa fa-facebook"
                      />
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="fa fa-twitter" />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="fa fa-linkedin"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="fa fa-google-plus"
                      />
                    </li>
                  </ul>
                </div>
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
                    <img src={require("../../assets/front/images/logo.png").default} width={193} height={89} alt="logo" />
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
                      <a href="/">Home</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/about">About</a>
                    </li>
                    <li>
                      {" "}
                      <a href="javascript:">
                        Services
                        <i className="fa fa-chevron-down" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/logistics">Logisticks</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a href="/contact">Contact us</a>
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* Main Header END */}
        </header>
        {/* Header END */}
      </div>
    </>
  );
};

export default Header;
