import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget widget_about">
                  <div className="logo-footer">
                    <img
                      src={
                        require("../../asset/images/chyan-logistics.png")
                          .default
                      }
                      alt="chyan-logistics"
                    />
                  </div>
                  <p className="m-t20 m-b15">
                    <strong>Chayan Enterprises Private limited</strong> , one of
                    the largest Logistics companies in India. Directly from
                    shipping your load across the globe, giving a-list Container
                    Freight Station and Inland Container Depot offices
                  </p>
                  <ul className="dez-social-icon dez-border">
                    <li>
                      <Link className="fa fa-facebook" to="" />
                    </li>
                    <li>
                      <Link className="fa fa-twitter" to="" />
                    </li>
                    <li>
                      <Link className="fa fa-linkedin" to="" />
                    </li>
                    <li>
                      <Link className="fa fa-facebook" to="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget widget_services">
                  <h3 className="m-b10">Our services</h3>
                  <div className="dez-separator bg-primary" />
                  <ul>
                    <li>
                      <Link to="/logistics">Air Logistics</Link>
                    </li>
                    <li>
                      <Link to="/logistics">Surface Logistics</Link>
                    </li>
                    <li>
                      <Link to="/logistics">Warehouse</Link>
                    </li>
                    <li>
                      <Link to="/manpower">Manpawer Service</Link>
                    </li>
                    <li>
                      <Link to="/manpower">Security Manpawer</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget widget_getintuch">
                  <h3 className="m-b10">Contact us</h3>
                  <div className="dez-separator bg-primary" />
                  <ul>
                    <li>
                      <i className="fa fa-map-marker" />
                      <strong>Address</strong> Khasra No 647,A Block opposite
                      Chaudhary Farm ,Rangpuri Extension ,New Delhi 110037
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      <strong>Phone</strong>+91 11-41678277
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      <strong>Mail</strong>info@hchayanlogistics.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom Part */}
        <div className="footer-bottom bg-primary">
          <div className="container">
            <div className="row text-white">
              <div className="col-lg-4 text-left">
                <span>© Copyright 2021</span>
              </div>
              <div className="col-lg-4 text-center">
                <span>
                  {" "}
                  Design With <i className="fa fa-heart heart" /> By iHostweb{" "}
                </span>
              </div>
              <div className="col-lg-4 text-right">
                <ul className="list-inline">
                  <li>
                    <Link to="/about"> About</Link>
                  </li>
                  <li>
                    <Link to="/contact"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
