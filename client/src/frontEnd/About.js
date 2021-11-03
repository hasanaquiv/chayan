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
        {/* inner page banner */}
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{ backgroundImage: "url(" + bg4 + ")" }}
        >
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">About Us</h1>
            </div>
          </div>
        </div>
        {/* inner page banner END */}
        {/* Breadcrumb row */}
        <div className="breadcrumb-row">
          <div className="container">
            <ul className="list-inline">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>About</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumb row END */}
        {/* About area */}
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
        </div>
        {/* About area  END */}
        {/* Footer */}
        <Footer />
        {/* Footer END*/}
        <button className="scroltop fa fa-arrow-up" />
      </div>
    </>
  );
};

export default About;
