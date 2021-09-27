import { useEffect } from "react";
import { Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { getTracking } from "../../store/actions/trackingAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/HorizontalLayout/Loader";

const Tracking = (props) => {
  let ids = props.history.location.pathname;
  const id = ids.substr(10);

  const dispatch = useDispatch();
  const { tracking, loader } = useSelector((state) => state.trackings);

  useEffect(() => {
    dispatch(getTracking(id));
  }, [dispatch, id]);

  let date = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(months[date.getMonth()]);

  return (
    <>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="tracking" breadcrumbItem="Tracking" />
        <Row>
          <Col lg={12}>
            <div className="card">
              <div className="card-body">
                <div className="timeline p-4">
                  <Row>
                    <div className="col-sm-4 mb-5">
                      {tracking.vehicleNumber}
                    </div>
                    <div className="col-sm-4 mb-5">{(tracking.driverName)}</div>
                  </Row>
                  <Row>
                    {!loader ? (
                      tracking.locations !== undefined &&
                      tracking.locations.map((value, index) => {
                        return (
                          <div className="timeline-box col-lg-2">
                            <div className="timeline-spacing">
                              <div className="item-lable bg-primary rounded">
                                <p className="text-center text-white">
                                  April, 12
                                </p>
                              </div>
                              <div className="timeline-line active">
                                <div className="dot bg-primary"></div>
                              </div>
                              <div className="vertical-line">
                                <div className="wrapper-line bg-light"></div>
                              </div>
                              <div className="bg-light p-4 rounded mx-3">
                                <h5>{value.location}</h5>
                              </div>
                            </div>
                            l
                          </div>
                        );
                      })
                    ) : (
                      <Loader />
                    )}
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Tracking;
