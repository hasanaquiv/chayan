import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, Alert, Table } from "reactstrap";
import { getManifest } from "../../store/actions/manifestAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import Loader from "../../components/HorizontalLayout/Loader";

const Manifest = (props) => {
  const dispatch = useDispatch();
  const { manifest, loader } = useSelector((state) => state.manifests);
  const pathname = props.location.pathname;
  const id = pathname.substr(10);

  useEffect(() => {
    dispatch(getManifest(id));
  }, [dispatch, id]);
  // console.log(manifest);

  const date = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="Pages" breadcrumbItem="Invoice" />
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <div className="Billing-title">
                  <h4 className="float-end font-size-16">Order # 12345</h4>
                  <div className="mb-4">
                    <img
                      src={
                        require("../../assets/images/chyan-logistics.png")
                          .default
                      }
                      alt="icon"
                      width="120px"
                    />
                  </div>
                </div>
                <hr />
      <Row>
        <div className="col-6">
          <address>
            <strong>Manifest Number</strong>
            <br />
            {manifest.manifestNumber}
          </address>
        </div>
        <div className="col-6 text-end">
          <address>
            <strong>Manifest Origin</strong>
            <br />
            {manifest.manifestOrigin}
            <br />
            <strong>Manifest Destination</strong>
            <br />
            {manifest.manifestDestination}
            <br />
            <strong>Manifest Date</strong>
            <br />
            {/* October 16, 2019 */}
            {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
          </address>
        </div>
      </Row>
                {/* <BillingTop id={id} /> */}
                <div className="py-2 mt-3">
                  <h3 className="font-size-15 fw-bold">Manifest summary</h3>
                </div>
                <div className="table-responsive">
                  <Table className="table-nowrap">
                    <thead>
                      <tr>
                        <th style={{ width: "70px" }}>No.</th>
                        <th>Docket Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loader ? (
                        manifest.docketNUmbers !== undefined &&
                        manifest.docketNUmbers.map((value, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{value.docketNUmber}</td>
                            </tr>
                          );
                        })
                      ) : (
                        <Loader />
                      )}
                    </tbody>
                  </Table>
                </div>
                <div className="d-print-none">
                  <div className="float-end">
                    <Link
                      to="#"
                      className="btn btn-success waves-effect waves-light"
                    >
                      <i className="fa fa-print"></i>
                    </Link>{" "}
                    <Link
                      to="#"
                      className="btn btn-primary w-md waves-effect waves-light"
                    >
                      Send
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Manifest;
