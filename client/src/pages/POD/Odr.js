import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, Alert, Table } from "reactstrap";
import { getOdr } from "../../store/actions/odrAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import Loader from "../../components/HorizontalLayout/Loader";

const Odr = (props) => {
  const dispatch = useDispatch();
  const { odr, loader } = useSelector((state) => state.odrs);
  const pathname = props.location.pathname;
  const id = pathname.substr(5);

  useEffect(() => {
    dispatch(getOdr(id));
  }, [dispatch, id]);
  console.log(odr);

  const date = new Date();
  const months = [
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
                      <strong>Odr Number</strong>
                      <br />
                      {odr.odrNumber}
                    </address>
                  </div>
                  <div className="col-6 text-end">
                    <address>
                      <strong>Odr Origin</strong>
                      <br />
                      {odr.deliveryBoy}
                      <br />
                      <strong>Odr Destination</strong>
                      <br />
                      {odr.odrDestination}
                      <br />
                      <strong>Odr Date</strong>
                      <br />
                      {/* October 16, 2019 */}
                      {months[date.getMonth()]} {date.getDate()},{" "}
                      {date.getFullYear()}
                    </address>
                  </div>
                </Row>
                {/* <BillingTop id={id} /> */}
                <div className="py-2 mt-3">
                  <h3 className="font-size-15 fw-bold">Odr summary</h3>
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
                        odr.docketNUmbers !== undefined &&
                        odr.docketNUmbers.map((value, index) => {
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

export default Odr;
