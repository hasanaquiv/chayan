import React from "react";
import { Link } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

const bg4 = require("../asset/images/background/bg4.jpg").default;

const Contact = () => {
  return (
    <>
      <div className="page-wraper">
        <div id="loading-area" />
        {/* Header */}
        <Header />
        {/* inner page banner */}
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{ backgroundImage: "url(" + bg4 + ")" }}
        >
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Career</h1>
            </div>
          </div>
        </div>
        {/* inner page banner END */}
        {/* Breadcrumb row */}
        <div className="breadcrumb-row">
          <div className="container">
            <ul className="list-inline">
              <li>
                <Link href="index.html">Home</Link>
              </li>
              <li>Career</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumb row END */}
        {/* contact area */}
        <div className="content-area">
          <div className="container">
            <div className="row">
              {/* Left part start */}
              <div className="col-xl-8 col-lg-8 col">
                <div className="dzFormMsg" />
                <div className="p-a30 bg-white clearfix m-b30">
                  <h3>Send To CV</h3>
                  <h1>career@chayanlogistics.com</h1>
                </div>
              </div>
              {/* Left part END */}
              {/* right part start */}
              <div className="col-xl-4 col-lg-4">
                <div className="p-a30 bg-white m-b30">
                  <h3>Contact Info</h3>
                  <ul className="no-margin">
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs bg-primary">
                        {" "}
                        <Link href="" className="icon-cell">
                          <i className="fa fa-map-marker" />
                        </Link>{" "}
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-b0 dez-tilte">
                          Address DELHI
                        </h6>
                        <p>
                          KHASRA NO 647,A BLOCK,
                          <br />
                          RANGPURI EXTN., SOUTH WEST DELHI, DELHI-110037
                          <br />
                          CONTACT NO.:7982979198 <br />
                          Concerned Person: Pawan Rai
                        </p>
                      </div>
                    </li>
                    <li className="icon-bx-wraper left  m-b30">
                      <div className="icon-bx-xs bg-primary">
                        {" "}
                        <Link href="" className="icon-cell">
                          <i className="fa fa-envelope" />
                        </Link>{" "}
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-b0 dez-tilte">EMAIl</h6>
                        <p>info@chayanlogistics.com</p>
                      </div>
                    </li>
                    <li className="icon-bx-wraper left">
                      <div className="icon-bx-xs bg-primary">
                        {" "}
                        <Link href="" className="icon-cell">
                          <i className="fa fa-phone" />
                        </Link>{" "}
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-b0 dez-tilte">PHONE</h6>
                        <p>+91 7982979198</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* right part END */}
            </div>
          </div>
        </div>
        {/* contact area  END */}
        {/* Footer */}
        <Footer />
        {/* Footer END*/}
        <button className="scroltop fa fa-arrow-up" />
      </div>
    </>
  );
};

export default Contact;
