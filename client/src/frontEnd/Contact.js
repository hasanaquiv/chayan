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
            <h1 className="text-white">Contact Us</h1>
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
            <li>Contact us</li>
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
                <h3>Contact form</h3>
                <form
                  method="post"
                  className="dzForm"
                  action="script/contact.php"
                >
                  <input type="hidden" defaultValue="Contact" name="dzToDo" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-user" />
                            </span>
                          </div>
                          <input
                            name="dzName"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-envelope" />
                            </span>
                          </div>
                          <input
                            name="dzEmail"
                            type="email"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend v-align-t">
                            <span className="input-group-text">
                              <i className="fa fa-pencil" />
                            </span>
                          </div>
                          <textarea
                            name="dzMessage"
                            rows={4}
                            className="form-control"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="g-recaptcha-bx">
                        <div
                          className="g-recaptcha"
                          data-sitekey="<!-- Put reCaptcha Site Key -->"
                          data-callback="verifyRecaptchaCallback"
                          data-expired-callback="expiredRecaptchaCallback"
                        />
                        <input
                          className="form-control d-none"
                          style={{ display: "none" }}
                          data-recaptcha="true"
                          required
                          data-error="Please complete the Captcha"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="site-button"
                      >
                        <span>Submit</span>
                      </button>
                      <button
                        name="Resat"
                        type="reset"
                        value="Reset"
                        className="site-button m-l30"
                      >
                        <span>Reset</span>
                      </button>
                    </div>
                  </div>
                </form>
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
                      <h6 className="text-uppercase m-b0 dez-tilte">Address</h6>
                      <p>
                        Khasra No 647,A Block
                        <br /> opposite Chaudhary Farm ,<br />
                        Rangpuri Extension
                        <br />
                        New Delhi 110037
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
                      <p>+91 11-41678277</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* right part END */}
          </div>
          <div className="row">
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
                      <h6 className="text-uppercase m-b0 dez-tilte">Address</h6>
                      <p>
                        131/128 Gopal Nagar <br /> Near,Nawrang Sweet House,
                        <br /> Agra Machine, <br />
                        Kanpur Nager, Pin-208011
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
                      <h6 className="text-uppercase m-b0 dez-tilte">Address</h6>
                      <p>
                        House No-566 Shiwani Nagar,
                        <br /> Near Sr Hotel, <br />
                        Saheed Path, <br />
                        Lucknow Pin-226012
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
                      <h6 className="text-uppercase m-b0 dez-tilte">Address</h6>
                      <p>
                        119a, Transport Nagar,
                        <br /> Allahabad Pin-211011
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
                      <h6 className="text-uppercase m-b0 dez-tilte">Address</h6>
                      <p>
                        Chaturvedi Complex, <br /> Nh-28, Near Mahewa Police
                        Chwoki Transport Nagar <br />
                        Gorakhpur,Pin-273001
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
                      <h6 className="text-uppercase m-b0 dez-tilte">Address</h6>
                      <p>
                        D65/462 F, <br />
                        Lahartara Chauraha,
                        <br /> Varanasi, Pin-221002
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Map part start */}
              <h4>Our Location</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.119785441893!2d77.11308115332112!3d28.536119060478327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1def66d85f3d%3A0xa5f902e07faa41a9!2sShiv%20Murti!5e0!3m2!1sen!2sin!4v1629545104807!5m2!1sen!2sin"
                style={{ border: 0, width: "100%", height: 400 }}
                allowFullScreen
              />
              {/* Map part END */}
            </div>
          </div>
        </div>
      </div>
      {/* contact area  END */}{/* Footer */}
      <Footer />
      {/* Footer END*/}        
        <button className="scroltop fa fa-arrow-up" />
      </div>
    </>
  );
};

export default Contact;
