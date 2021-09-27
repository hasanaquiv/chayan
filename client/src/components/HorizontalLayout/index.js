import { useState, useEffect } from "react";

import Loader from "./Loader";

// Other Layout related Component

import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => {
    setIsMenuOpened({ isMenuOpened: !isMenuOpened });
  };
  return (
    <>
      {/* <Loader /> */}
      <div className="container-fluid">
        <div id="layout-wrapper">
          <header id="page-topbar">
            <Header
              isMenuOpened={isMenuOpened}
              openLeftMenuCallBack={openMenu}
            ></Header>
          </header>
          <div className="main-content">
            {props.children}
          </div>
        </div>
      </div>      
      <Footer />
    </>
  );
};

export default Layout;
