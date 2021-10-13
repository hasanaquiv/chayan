import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Row, Col, CardBody, Card, Progress } from "reactstrap";

//Import Components
import LineChart from "./line-chart";
import LatestBooking from "./LatestBooking";
import { getAllBookings } from "../../store/actions/bookingAction";
import { getAllConsigners } from "../../store/actions/consignerAction";
import { getAllBillings } from "../../store/actions/billingAction";
import { getAllManifests } from "../../store/actions/manifestAction";
//Import Image
import Inbox from "./Inbox";

import Loader from "../../components/HorizontalLayout/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { bookings, loader } = useSelector((state) => state.bookings);
  const { consigners } = useSelector((state) => state.consigners);
  const { billings } = useSelector((state) => state.billings);
  const { manifests } = useSelector((state) => state.manifests);

  useEffect(() => {
    dispatch(getAllBookings());
    dispatch(getAllConsigners());
    dispatch(getAllBillings());
    dispatch(getAllManifests());
  }, [dispatch]);

  const dataBooing = bookings.response;
  const dataConsigner = consigners.response;
  const dataBilling = billings.response;
  const dataManifest = manifests.response;
  let totalBookings = (Object.keys(bookings).length > 0) ? dataBooing.length : null;
  let totalConsigners = (Object.keys(consigners).length > 0) ? dataConsigner.length : null;
  let totalBillings = (Object.keys(billings).length > 0) ? dataBilling.length : null;
  let totalManifests = (Object.keys(manifests).length > 0) ? dataManifest.length : null;

  // console.log(totalBookings, "booking")
  // console.log(totalConsigners, "consigners")
  // console.log(totalBillings, "billings")
  // console.log(totalManifests, "manifests")


  return (
    <>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Dashboard</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">
                    Welcome to Chayan Logistics
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Row>

        <Row>
          <Col lg={3}>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="mdi mdi-tag-plus-outline"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">New Booking</div>
                  </div>
                </div>
                <h4 className="mt-4">{totalBookings}</h4>
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0">
                      <span className="text-success me-2">
                        {" "}
                        0.28% <i className="mdi mdi-arrow-up"></i>{" "}
                      </span>
                    </p>
                  </div>
                  <div className="col-5 align-self-center">
                    <Progress
                      value="62"
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="mdi mdi-account-multiple-outline"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Consigner</div>
                  </div>
                </div>
                <h4 className="mt-4">{totalConsigners}</h4>
                <Row>
                  <div className="col-7">
                    <p className="mb-0">
                      <span className="text-success me-2">
                        {" "}
                        0.16% <i className="mdi mdi-arrow-up"></i>{" "}
                      </span>
                    </p>
                  </div>
                  <div className="col-5 align-self-center">
                    <Progress
                      value="62"
                      color="success"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3}>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="mdi mdi-tag-plus-outline"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Manifest</div>
                  </div>
                </div>
                <h4 className="mt-4">{totalManifests}</h4>
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0">
                      <span className="text-success me-2">
                        {" "}
                        0.28% <i className="mdi mdi-arrow-up"></i>{" "}
                      </span>
                    </p>
                  </div> 
                  <div className="col-5 align-self-center">
                    <Progress
                      value="62"
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="mdi mdi-account-multiple-outline"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Billing</div>
                  </div>
                </div>
                <h4 className="mt-4">{totalBillings}</h4>
                <Row>
                  <div className="col-7">
                    <p className="mb-0">
                      <span className="text-success me-2">
                        {" "}
                        0.16% <i className="mdi mdi-arrow-up"></i>{" "}
                      </span>
                    </p>
                  </div>
                  <div className="col-5 align-self-center">
                    <Progress
                      value="62"
                      color="success"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <LineChart />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <LatestBooking />
          </Col>
          <Col lg={4}>
            <Inbox />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
