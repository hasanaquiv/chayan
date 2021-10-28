import React from "react";
import { Link } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

const bg4 = require("../asset/images/background/bg4.jpg").default;

const About = () => {
  return (
    <>
    <div className="page-wraper">
      <div id="loading-area" />
      {/* Header */}
      <Header />
      <div>
        {/* inner page banner */}
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{ backgroundImage: "url(" + bg4 + ")" }}
        >
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">About Us 2</h1>
            </div>
          </div>
        </div>
        {/* inner page banner END */}
        {/* Breadcrumb row */}
        <div className="breadcrumb-row">
          <div className="container">
            <ul className="list-inline">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumb row END */}
        {/* contact area */}
        <div className="content-area">
          {/* About Company */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-head text-left">
                  <div className="col-md-12 text-center section-head p-t20">
                    <h2 className="h2">
                      {" "}
                      <span className="text-primary">About Company</span>
                    </h2>
                    <div className="dez-separator-outer ">
                      <div className="dez-separator bg-primary style-liner" />
                    </div>
                    <div className="clear" />
                    <p className="m-b0">
                      Chayan Enterprises Private limited, one of the largest
                      Logistics companies in India. Directly from shipping your
                      load across the globe, giving a-list Container Freight
                      Station and Inland Container Depot offices, empowering
                      complex ventures, giving great hardware to building or
                      renting redid distribution centers and upgrading your
                      stockpile chains, you can believe us with anything you
                      need.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <ul className="list-angle-right">
                        <li>
                          Aim Of Making Chayan Nation Wide Logistics Company
                        </li>
                        <li>
                          Currently Will Deal In Air Cargo, Surface Cargo And
                          Warehousing
                        </li>
                        <li>
                          Hiring Skilled &amp; Experience Manpower In Field Of
                          Logistics
                        </li>
                        <li>
                          Will Add Some Big Names In Logistics Industry In
                          Coming Days
                        </li>
                        {/* <li>
                          Aayam Group Providing Services To Companies Like
                          Indigo, Spicejet,namco Industries, Etc.
                        </li> */}
                        <li>
                          Currently Having Strength Of Around 500+ Employees All
                          Over India
                        </li>
                        <li>Head Office Situated In New Delhi</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
                        <div className="icon-bx-sm radius bg-primary">
                          {" "}
                          <Link href="" className="icon-cell">
                            <i className="fa fa-shopping-basket" />
                          </Link>{" "}
                        </div>
                        <div className="icon-content p-l40">
                          <h4 className="dez-tilte m-b0">
                            Import Export Goods
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
                        <div className="icon-bx-sm radius bg-primary">
                          {" "}
                          <Link href="" className="icon-cell">
                            <i className="fa fa-truck" />
                          </Link>{" "}
                        </div>
                        <div className="icon-content p-l40">
                          <h4 className="dez-tilte m-b0">
                            Fast Delivery Network
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
                        <div className="icon-bx-sm radius bg-primary">
                          {" "}
                          <Link href="" className="icon-cell">
                            <i className="fa fa-map-marker" />
                          </Link>{" "}
                        </div>
                        <div className="icon-content p-l40">
                          <h4 className="dez-tilte m-b0">
                            Well Qualified Staff
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="icon-bx-wraper bx-style-2 m-l40 m-b30 p-a30 left">
                        <div className="icon-bx-sm radius bg-primary">
                          {" "}
                          <Link href="" className="icon-cell">
                            <i className="fa fa-user" />
                          </Link>{" "}
                        </div>
                        <div className="icon-content p-l40">
                          <h4 className="dez-tilte m-b0">User Friendly</h4>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About Company END */}
          {/* counter */}
          <div
            className="section-full aon-our-services bg-gray bg-img-fix p-t60 p-b30  overlay-black-middle"
            style={{ backgroundImage: "url(images/background/bg2.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                  <div className="p-a30 text-white text-center border-3">
                    <div className="icon-lg m-b20">
                      <div className="icon-cell text-white">
                        {" "}
                        <i className="fa fa-building-o" />{" "}
                      </div>
                    </div>
                    <div className="counter font-26 font-weight-800 text-primary m-b5">
                      1035
                    </div>
                    <span>Completed Project</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                  <div className="p-a30 text-white text-center border-3">
                    <div className="icon-lg m-b20">
                      <div className="icon-cell text-white">
                        {" "}
                        <i className="fa fa-male" />{" "}
                      </div>
                    </div>
                    <div className="counter font-26 font-weight-800 text-primary m-b5">
                      1124
                    </div>
                    <span>Active Experts</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                  <div className="p-a30 text-white text-center border-3">
                    <div className="icon-lg m-b20">
                      <div className="icon-cell text-white">
                        {" "}
                        <i className="fa fa-male" />{" "}
                      </div>
                    </div>
                    <div className="counter font-26 font-weight-800 text-primary m-b5">
                      834
                    </div>
                    <span>Happy Clients</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                  <div className="p-a30 text-white text-center border-3">
                    <div className="icon-lg m-b20">
                      <div className="icon-cell text-white">
                        {" "}
                        <i className="fa fa-area-chart" />{" "}
                      </div>
                    </div>
                    <div className="counter font-26 font-weight-800 text-primary m-b5">
                      538
                    </div>
                    <span>Developer Hand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Counter END*/}
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
                        <Link href="">
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
                          <Link href="">Vinod Singh</Link>
                        </h4>
                        <div className="bg-primary skew-content-box">
                          <ul className="dez-social-icon">
                            <li>
                              <Link className="fa fa-facebook" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-twitter" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-linkedin" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-google-plus" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-pinterest-p" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-instagram" href="" />
                            </li>
                          </ul>
                        </div>
                        <span>Cheif Excutive Officer</span>
                        {/* <p class="m-t10 m-b0">Lorem ipsum dolor Fusce varius euismod lacus eget feugiat rorem ipsum dolor consectetur Fusce varius. </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 m-b30">
                    <div className="dez-box">
                      <div className="dez-media">
                        {" "}
                        <Link href="">
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
                          <Link href="">Ravi Singh</Link>
                        </h4>
                        <div className="bg-primary skew-content-box">
                          <ul className="dez-social-icon">
                            <li>
                              <Link className="fa fa-facebook" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-twitter" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-linkedin" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-google-plus" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-pinterest-p" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-instagram" href="" />
                            </li>
                          </ul>
                        </div>
                        <span>Cheif Operating Officer</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 m-b30">
                    <div className="dez-box">
                      <div className="dez-media">
                        {" "}
                        <Link href="">
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
                          <Link href="">Sanjay Dwivedi</Link>
                        </h4>
                        <div className="bg-primary skew-content-box">
                          <ul className="dez-social-icon">
                            <li>
                              <Link className="fa fa-facebook" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-twitter" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-linkedin" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-google-plus" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-pinterest-p" href="" />
                            </li>
                            <li>
                              <Link className="fa fa-instagram" href="" />
                            </li>
                          </ul>
                        </div>
                        <span>Chief Finance Officer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Team member */}
        </div>
        {/* contact area  END */}
      </div>{/* Footer */}
      <Footer />
      {/* Footer END*/}        
        <button className="scroltop fa fa-arrow-up" />
      </div>
    </>
  );
};

export default About;
