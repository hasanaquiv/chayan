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
                      We take this opportunity to introduce our Company “CHAYAN
                      LOGISTICS PVT. LTD.” As logistics Masters have strategic
                      partners in major Airports & Surface transport on pan
                      India basis. We are specialized in surface transport &
                      logistics, warehousing & airfreights. With reliability &
                      timely services, the Company has grown progressively to
                      become a major & reliable player in the sector. The
                      company has invested tremendously in the latest and
                      relevant technologies in regard to communications,
                      tracking, transfers, transport, packaging & storage. With
                      Chayan Logistics, goods are not only secured but clients
                      are always in the know as pertains to the whereabouts of
                      their goods every step of the way through our Internal
                      Operation Standard which is benchmarked nationwide.
                      Integrity , sense of urgency ,timeliness & caring attitude
                      is the core value of our company. To be an authority &
                      Market leader in offering reliable, cost-effective &
                      secure nationwide logistics solutions where our customers
                      will benefit from a personalized relationship is our basic
                      vision. We are the provider of choice for innovative &
                      quality logistical solutions We provide secure & spacious
                      warehousing & logistics support. We are just a call away &
                      our riders will ensure they collect and deliver the
                      documents on time. We take utmost care of your cargo when
                      loading & offloading by use of specialized lifting
                      equipment in all our handlings. Our rates are very
                      competitive in the market. They are negotiable based on
                      cargo volume, there are no hidden charges on our rates.
                      Our quotations are detailed & self-explanatory. We also
                      offer door-to-door services & transit bonds from cargo
                      origin to the clients’ offices or warehouses. We are the
                      vendors of leading airlines i,e. M/s Spice jet Ltd. & M/s
                      Indigo Airlines CHAYAN LOGISTICS PVT. LTD. is a Facility
                      Management Company based in New Delhi (India). We proudly
                      achieved the provision of more than 500 workers across its
                      network. CHAYAN LOGISTICS PVT. LTD. is growing Company
                      with branch offices in Haryana, Uttrakhand, Uttar Pradesh,
                      Madhya Pradesh, Maharashtra, Bihar, Chhattisgarh, Andhra
                      Pradesh, Telangana, Orissa and Jharkhand, with the vision
                      to provide the world class facility services so as to grow
                      India’s premier and the largest facility management
                      company.
                    </p>
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
                          Inbound and Outbound Goods
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
