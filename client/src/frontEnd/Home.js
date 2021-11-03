import React from "react";
import { Link } from "react-router-dom";
import Slider from "./component/Slider";

import Header from "./component/Header";
import Footer from "./component/Footer";

const bg2 = require("../asset/images/background/bg2.jpg").default;
const bg3 = require("../asset/images/background/bg3.jpg").default;

const Home = () => {
  return (
    <>
    <div className="page-wraper">
      <div id="loading-area" />
      {/* Header */}
      <Header />
      {/* Header END */} {/* Content */}
      <div className="page-content bg-white" style={{padding:0}}>
        {/* Slider */}
        <Slider />
        {/* Slider END */} {/* Our Service Box */}
        <div className="section-full our-service p-b10">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="icon-bx-wraper text-center service-box p-a30 bg-white skew-angle">
                  <div className="icon-lg radius">
                    {" "}
                    <span className="icon-cell">
                      <i className="fa fa-plane" />
                    </span>{" "}
                  </div>
                  <div className="icon-content">
                    <h4 className="m-b0 m-t10">Air Freight</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="icon-bx-wraper text-center service-box p-a30 bg-white skew-angle">
                  <div className="icon-lg radius">
                    {" "}
                    <span className="icon-cell">
                      <i className="fa fa-ship" />
                    </span>{" "}
                  </div>
                  <div className="icon-content">
                    <h4 className="m-b0 m-t10">Sea Freight</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="icon-bx-wraper text-center service-box p-a30 bg-white skew-angle">
                  <div className="icon-lg radius">
                    {" "}
                    <span className="icon-cell">
                      <i className="fa fa-train" />
                    </span>{" "}
                  </div>
                  <div className="icon-content">
                    <h4 className="m-b0 m-t10">Train Freight</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="icon-bx-wraper text-center service-box p-a30 bg-white skew-angle">
                  <div className="icon-lg radius">
                    {" "}
                    <span className="icon-cell">
                      <i className="fa fa-truck" />
                    </span>{" "}
                  </div>
                  <div className="icon-content">
                    <h4 className="m-b0 m-t10">Road Freight</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Service Box End */}
        {/* Our Service */}
        <div className="section-full awesome-services bg-white p-t50 p-b40">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-12 text-center section-head">
                  <h3 className="h3">Our Services</h3>
                  <div className="dez-separator bg-primary" />
                  <div className="clear" />
                  <p className="m-b0">
                    We Provide Fats and Secure Logistics Service
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="dez-box m-b30">
                    <div className="dez-media dez-img-effect zoom">
                      {" "}
                      <img
                        src={
                          require("../asset/images/our-work/warehouse.jpg")
                            .default
                        }
                        alt="warehouse"
                      />
                      <div className="dez-info-has p-a20 bg-secondry no-hover">
                        <div className="icon-bx-wraper center">
                          <div className="icon-md text-primary m-b20">
                            {" "}
                            <Link to="/logistics" className="icon-cell">
                              <i className="fa fa-shopping-basket" />
                            </Link>{" "}
                          </div>
                          <div className="icon-content">
                            <h3 className="dez-tilte m-b5">
                              Warehouse Services
                            </h3>
                            <p>
                              Our services are little bundle with enormous
                              impact. With our Warehouse and Distribution
                              Network Services, We manage your
                            </p>
                            <Link to="/logistics" className="site-button-link">
                              Read More
                            </Link>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="dez-box m-b30">
                    <div className="dez-media dez-img-effect zoom">
                      {" "}
                      <img
                        src={
                          require("../asset/images/our-work/surface.jpg")
                            .default
                        }
                        alt="surface"
                      />
                      <div className="dez-info-has p-a20 bg-secondry no-hover">
                        <div className="icon-bx-wraper center">
                          <div className="icon-md text-primary m-b20">
                            {" "}
                            <Link to="/logistics" className="icon-cell">
                              <i className="fa fa-truck" />
                            </Link>{" "}
                          </div>
                          <div className="icon-content">
                            <h3 className="dez-tilte m-b5">Surface Services</h3>
                            <p>
                              We believe change is vital. We change, innovate
                              and customize our services. With over 5000
                              dedicated fleet of
                            </p>
                            <Link to="/logistics" className="site-button-link">
                              Read More
                            </Link>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="dez-box m-b30">
                    <div className="dez-media dez-img-effect zoom">
                      {" "}
                      <img
                        src={
                          require("../asset/images/our-work/air.jpg").default
                        }
                        alt="air"
                      />
                      <div className="dez-info-has p-a20 bg-secondry no-hover">
                        <div className="icon-bx-wraper center">
                          <div className="icon-md text-primary m-b20">
                            {" "}
                            <Link to="/logistics" className="icon-cell">
                              <i className="fa fa-map-marker" />
                            </Link>{" "}
                          </div>
                          <div className="icon-content">
                            <h3 className="dez-tilte m-b5">Air Services</h3>
                            <p>
                              Chayan Logistics is among the pioneers in India's
                              cargo space, offering the fastest and safest way
                              to deliver
                            </p>
                            <Link to="/logistics" className="site-button-link">
                              Read More
                            </Link>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Awesome Services END */}
        {/* Request A Quote */}
        <div
          className="section-full text-white bg-img-fix p-t70 p-b40 overlay-black-middle request-a-quote choose-us"
          style={{ backgroundImage: "url(" + bg2 + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-left">
                  <h3 className="h3">Request A Quote</h3>
                  <div className="dez-separator bg-primary" />
                </div>
                <div className="p-t10 p-b20 clearfix">
                  <form
                    method="post"
                    className="dzForm"
                    action="script/contact.php"
                  >
                    <input
                      type="hidden"
                      defaultValue="Appointment"
                      name="dzToDo"
                    />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            name="dzName"
                            className="form-control"
                            placeholder="Name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            name="dzEmail"
                            className="form-control"
                            placeholder="Email"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            name="dzOther[date]"
                            className="form-control"
                            type="date"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <select
                            className="bs-select-hidden"
                            name="dzOther[service]"
                          >
                            <option value="Yoda">Air Logistics</option>
                            <option value="Wait Loss">Surface Logistics</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
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
                      <div className="col-lg-12 text-center">
                        <div className="dzFormMsg" />
                        <button
                          name="Reset"
                          value="Reset"
                          type="reset"
                          className="site-button m-r5 skew-secondry"
                        >
                          <span>Reset</span>
                        </button>
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="site-button skew-secondry"
                        >
                          <span>Submit</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Request A Quote End */}
        {/* Team member */}
        <div className="section-full bg-white p-t70 p-b40">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="h2">Meet Our Team</h2>
              <div className="dez-separator bg-primary" />
            </div>
            <div className="section-content">
              <div className="row">
                <div className="col-lg-4 col-md-4 m-b30">
                  <div className="dez-box">
                    <div className="dez-media">
                      {" "}
                      <Link to="">
                        <img
                          src={
                            require("../asset/images/testimonials/male.png")
                              .default
                          }
                          alt="male"
                        />
                      </Link>{" "}
                    </div>
                    <div className="dez-info p-a20 p-t40 border-1">
                      <h4 className="dez-title m-tb0">
                        <Link to="">Vinod Singh</Link>
                      </h4>
                      <div className="bg-primary skew-content-box">
                        <ul className="dez-social-icon">
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
                            <Link className="fa fa-instagram" to="" />
                          </li>
                        </ul>
                      </div>
                      <span>Chief Executive Officer</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 m-b30">
                  <div className="dez-box">
                    <div className="dez-media">
                      {" "}
                      <Link to="">
                        <img
                          src={
                            require("../asset/images/testimonials/male.png")
                              .default
                          }
                          alt="male"
                        />
                      </Link>{" "}
                    </div>
                    <div className="dez-info p-a20 p-t40 border-1">
                      <h4 className="dez-title m-tb0">
                        <Link to="">Ravi Singh</Link>
                      </h4>
                      <div className="bg-primary skew-content-box">
                        <ul className="dez-social-icon">
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
                            <Link className="fa fa-instagram" to="" />
                          </li>
                        </ul>
                      </div>
                      <span>Chief Operating Officer</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 m-b30">
                  <div className="dez-box">
                    <div className="dez-media">
                      {" "}
                      <Link to="">
                        <img
                          src={
                            require("../asset/images/testimonials/male.png")
                              .default
                          }
                          alt="male"
                        />
                      </Link>{" "}
                    </div>
                    <div className="dez-info p-a20 p-t40 border-1">
                      <h4 className="dez-title m-tb0">
                        <Link to="">Sanjay Dwivedi</Link>
                      </h4>
                      <div className="bg-primary skew-content-box">
                        <ul className="dez-social-icon">
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
                            <Link className="fa fa-instagram" to="" />
                          </li>
                        </ul>
                      </div>
                      <span>Chief Financial Officer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team member */}
        {/* Company Stats  */}
        <div
          className="section-full bg-img-fix p-t70 p-b40 overlay-black-dark our-projects-galery"
          style={{ backgroundImage: "url(" + bg3 + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div className="icon-bx-wraper center text-white">
                  <div className="icon-xl m-b20">
                    {" "}
                    <span className="icon-cell">
                      {" "}
                      <i className="fa fa-group" />
                    </span>{" "}
                  </div>
                  <div className="m-t10">
                    <div className="dez-separator bg-primary" />
                  </div>
                  <div className="icon-content">
                    <h2 className="dez-tilte text-uppercase h2">
                      {" "}
                      <span className="counter">100</span> +{" "}
                    </h2>
                    <h6>Passionate Employee</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div className="icon-bx-wraper center text-white">
                  <div className="icon-xl m-b20">
                    {" "}
                    <span className="icon-cell">
                      {" "}
                      <i className="fa fa-university" />
                    </span>{" "}
                  </div>
                  <div className="m-t10">
                    <div className="dez-separator bg-primary" />
                  </div>
                  <div className="icon-content">
                    <h2 className="dez-tilte text-uppercase h2">
                      {" "}
                      <span className="counter">10</span> +{" "}
                    </h2>
                    <h6>Offices in India</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div className="icon-bx-wraper center text-white">
                  <div className="icon-xl m-b20">
                    {" "}
                    <span className="icon-cell">
                      {" "}
                      <i className="fa fa-globe" />
                    </span>{" "}
                  </div>
                  <div className="m-t10">
                    <div className="dez-separator bg-primary" />
                  </div>
                  <div className="icon-content">
                    <h2 className="dez-tilte text-uppercase h2">
                      {" "}
                      <span className="counter">245</span> +{" "}
                    </h2>
                    <h6>Modern Cargo Trucks</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                <div className="icon-bx-wraper center text-white">
                  <div className="icon-xl m-b20">
                    {" "}
                    <span className="icon-cell">
                      {" "}
                      <i className="fa fa-user" />
                    </span>{" "}
                  </div>
                  <div className="m-t10">
                    <div className="dez-separator bg-primary" />
                  </div>
                  <div className="icon-content">
                    <h2 className="dez-tilte text-uppercase h2">
                      {" "}
                      <span className="counter">1000</span> +{" "}
                    </h2>
                    <h6>Happy Clients</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Company Stats END */}
        {/* Latest blog */}
        {/* Latest blog END */}
        {/* Testimonials */}
        <div className="section-full bg-img-fix p-t70 p-b40">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="h2"> What Are Customer Saying</h2>
              <div className="dez-separator bg-primary" />
            </div>
            <div className="section-content">
              <div className="testimonial-five owl-carousel owl-none">
                <div className="item">
                  <div className="testimonial-6">
                    <div className="testimonial-text bg-white quote-left quote-right">
                      <p>
                        Very nice process and monitoring. Tracking of goods
                        movement &amp; OPS is commendable.
                      </p>
                    </div>
                    <div className="testimonial-detail clearfix bg-primary text-white">
                      <h4 className="testimonial-name m-tb0">Hasan</h4>
                      <span className="testimonial-position">Hecod CEO</span>
                      <div className="testimonial-pic radius">
                        <img
                          src={
                            require("../asset/images/testimonials/male.png")
                              .default
                          }
                          alt="male"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-6">
                    <div className="testimonial-text bg-white quote-left quote-right">
                      <p>
                        Very well organized operations, modern warehouses are
                        very neat &amp; clean. My heartiest congratulation to
                        Chayan Team.
                      </p>
                    </div>
                    <div className="testimonial-detail clearfix bg-primary text-white">
                      <h4 className="testimonial-name m-tb0">Maria</h4>
                      <span className="testimonial-position">Manager</span>
                      <div className="testimonial-pic radius">
                        <img
                          src={
                            require("../asset/images/testimonials/male.png")
                              .default
                          }
                          alt="male"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials End */}
      </div>
      {/* Content END*/}{/* Footer */}
      <Footer />
      {/* Footer END*/}        
        <button className="scroltop fa fa-arrow-up" />
      </div>
    </>
  );
};

export default Home;
