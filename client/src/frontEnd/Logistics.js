import React from "react";
import { Link } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

const bg4 = require("../asset/images/background/bg4.jpg").default;

const Logistics = () => {
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
              <h1 className="text-white">Logistics Us</h1>
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
              <li>Logistics</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumb row END */}
        {/* Logistics area */}
        <div className="content-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h2 className="m-b10"> Latest Service</h2>
                <div className="ro">
                  <div className="col-12">
                    <h3>Oparating Locations</h3>
                    <p>
                      Lucknow, Kanpur, Allahabad, Varanasi, Gorakhpur, Jhansi,
                      Delhi, Noida, Ghaziabad, Chandigarh, Ludhiana, Jalandhar.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                    <div className="dez-box">
                      <div className="dez-media">
                        {" "}
                        <Link to="/">
                          <img src={require("../asset/images/our-work/air.jpg").default} alt="air" />
                        </Link>{" "}
                      </div>
                      <div className="dez-info p-a30 border-1">
                        <h4 className="dez-title m-t0">
                          <Link to="/logistics">Air Logistics</Link>
                        </h4>
                        <p>
                          Chayan Logistics is among the pioneers in India’s
                          cargo space, offering the fastest and safest way to
                          deliver goods within the committed delivery time, to
                          any part of the country, with optimized &amp; cost
                          effective solutions. Based on years of experience we
                          have vast expertise in offering reliable Air Cargo
                          Services. Following a systematic framework, all the
                          procedures are carefully conducted right from storage
                          to the delivery of the cargo.
                        </p>
                        <Link to="/contact" className="site-button">
                          Enquery
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                    <div className="dez-box">
                      <div className="dez-media">
                        {" "}
                        <Link to="/logistics">
                          <img src={require("../asset/images/our-work/surface.jpg").default} alt="surface" />
                        </Link>{" "}
                      </div>
                      <div className="dez-info p-a30 border-1">
                        <h4 className="dez-title m-t0">
                          <Link to="/logistics">Surface Logistics</Link>
                        </h4>
                        <p>
                          We believe change is vital. We change, innovate and
                          customize our services. With over 5000 dedicated fleet
                          of vehicles with trained drivers plying every day, we
                          cover 10 lakh kilometers (on an average) in the entire
                          country. We are believed to be the best in catering to
                          any transportation requirement across the country with
                          fast, efficient and express logistics services.
                        </p>
                        <Link to="/contact" className="site-button">
                          Enquery
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                    <div className="dez-box">
                      <div className="dez-media">
                        {" "}
                        <Link to="/logistics">
                          <img src={require("../asset/images/our-work/warehouse.jpg").default} alt="warehouse" />
                        </Link>{" "}
                      </div>
                      <div className="dez-info p-a30 border-1">
                        <h4 className="dez-title m-t0">
                          <Link to="/logistics">Warehouse Services</Link>
                        </h4>
                        <p>
                          Our services are little bundle with enormous impact.
                          With our Warehouse and Distribution Network Services,
                          We manage your supply chain with integrated pool
                          distribution, cross docking, warehousing and
                          transportation solutions. We manage more than 15
                          million sq. ft. of warehouse space at various areas
                          the nation over. Our warehouse services firm provides
                          custom integrated transportation solutions.
                        </p>
                        <Link to="/contact" className="site-button">
                          Enquery
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-content">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper center">
                        <div className="icon-bx-sm radius bg-primary m-b20">
                          {" "}
                          <Link to="/logistics" className="icon-cell">
                            <i className="fa fa-cogs" />
                          </Link>{" "}
                        </div>
                        <div className="icon-content">
                          <h5 className="dez-tilte text-uppercase">Safety</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper center">
                        <div className="icon-bx-sm radius bg-primary m-b20">
                          {" "}
                          <Link to="/logistics" className="icon-cell">
                            <i className="fa fa-recycle" />
                          </Link>{" "}
                        </div>
                        <div className="icon-content">
                          <h5 className="dez-tilte text-uppercase">
                            Best Quality
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                      <div className="icon-bx-wraper center">
                        <div className="icon-bx-sm radius bg-primary m-b20">
                          {" "}
                          <Link to="/logistics" className="icon-cell">
                            <i className="fa fa-graduation-cap" />
                          </Link>{" "}
                        </div>
                        <div className="icon-content">
                          <h5 className="dez-tilte text-uppercase">Strategy</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services END */}
        </div>
        {/* Logistics area  END */}
        {/* Footer */}
        <Footer />
        {/* Footer END*/}
        <button className="scroltop fa fa-arrow-up" />
      </div>
    </>
  );
};

export default Logistics;
