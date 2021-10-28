import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget widget_about">
                  <div className="logo-footer">
                    <img
                      src={
                        require("../../assets/front/images/logo-white.png")
                          .default
                      }
                      alt="logo"
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
                      <Link href="https://facebook.com">
                        <i className="fab fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <a className="fa fa-twitter" href="javascript:void(0);" />
                    </li>
                    <li>
                      <a
                        className="fa fa-linkedin"
                        href="javascript:void(0);"
                      />
                    </li>
                    <li>
                      <a
                        className="fa fa-facebook"
                        href="javascript:void(0);"
                      />
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
                      <a href="/logistics">Air Logistics</a>
                    </li>
                    <li>
                      <a href="/logistics">Surface Logistics</a>
                    </li>
                    <li>
                      <a href="/logistics">Warehouse</a>
                    </li>
                    <li>
                      <a href="/manpower">Manpawer Service</a>
                    </li>
                    <li>
                      <a href="/manpower">Security Manpawer</a>
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
                      <strong>Mail</strong>info@chayanenterprises.com
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
                    <a href="/about"> About</a>
                  </li>
                  <li>
                    <a href="/contact"> Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer END*/}
    </>
  );
};

export default Footer;
