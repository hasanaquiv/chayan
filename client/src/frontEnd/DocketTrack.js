import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./component/Header";
import Footer from "./component/Footer";
import { getUserTrack } from "../store/actions/trackingAction";
import Loader from "../components/HorizontalLayout/Loader";

import "./timeline.css";

const bg4 = require("../asset/images/background/bg4.jpg").default;

const DocketTrack = () => {
  const dispatch = useDispatch();
  const { getTrack, loader } = useSelector((state) => state.trackings);

  const [search, setSearch] = useState("")

  // useEffect(() => {
  //   dispatch(getUserTrack());
  // }, [dispatch]);

  const onSubmit = (event) =>{
    event.preventDefault();
    dispatch(getUserTrack(search));
  }

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
                <h1 className="text-white">Docket Track</h1>
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
                <li>Docket Track Us</li>
              </ul>
            </div>
          </div>
          {/* Breadcrumb row END */}
          <div className="row mt-5 mb-5">
            <form role="search" className="dzSubscribe" onSubmit={onSubmit}>
              <div className="col-12">
                <div className="input-group">
                  <input
                    name="search"
                    type="search"
                    placeholder="Search With Your Docket Number"
                    required
                    className="form-control"
                    onChange={ (event) =>{ setSearch(event.target.value)}}
                    value={search}
                  />
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      name="submit"
                      value="Submit"
                      className="site-button m-l10"
                    >
                      Search
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
          {/* contact area */}
          <div>
          {
            search !== "" ? 
            <div className="container mb-5 mt-3">
              <h4>
                Docket Number :{" "}
                {search}
              </h4>
              <div className="row mt-3">
                <div className="col-md-12">
                  <div className="main-timeline3">
                    {!loader ? (
                      getTrack.locations !== undefined &&
                      getTrack.locations.map((value, index) => {
                        return (
                          <div className="timeline" key={index}>
                            <Link href="#" className="timeline-content">
                              <span className="year">{value.date}</span>
                              <h2 className="title mt-3">{value.location}</h2>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <Loader />
                    )}
                  </div>
                </div>
              </div>
            </div> : 
            <div className="col-md-12 text-center section-head p-t20 mt-5">
                    <h4 className="m-b0">
                      Chayan Enterprises Private limited, Track Your Docket
                    </h4>
                  </div>
          }
          </div>
          {/* contact area  END */}
        </div>
        {/* Footer */}
        <Footer />
        {/* Footer END*/}
        <button className="scroltop fa fa-arrow-up" />
      </div>
    </>
  );
};

export default DocketTrack;
