import { useEffect } from "react";
import { CardBody, Row, Col, Card, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { getBilling } from "../../store/actions/billingAction";
import BillingTop from "./BillingTop";
import Loader from "../../components/HorizontalLayout/Loader";

//Import Images

const Billing = (props) => {
  let ids = props.location.pathname;
  const id = ids.substr(9);

  const dispatch = useDispatch();
  const { billing, loader } = useSelector((state) => state.billings);

  useEffect(() => {
    dispatch(getBilling(id));
  }, [dispatch, id]);

  const data = billing.response;

  // console.log(data);
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
                <BillingTop id={id} />
                <div className="py-2 mt-3">
                  <h3 className="font-size-15 fw-bold">Order summary</h3>
                </div>
                <div className="table-responsive">
                  <Table className="table-nowrap">
                    <thead>
                      <tr>
                        <th style={{ width: "70px" }}>No.</th>
                        <th>Docket Number</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>No. Box</th>
                        <th>Actual Weight</th>
                        <th>Charge Weight</th>
                        <th>Freight Charge</th>
                        <th>Other Charge</th>
                        <th>GST</th>
                        <th>Total</th>
                        {/* <th className="text-end">Price</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {!loader ? (
                        data !== undefined &&
                        data.map((value, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{value.docketNumber}</td>
                              <td>{value.origin}</td>
                              <td>{value.destination}</td>
                              <td>1</td>
                              <td>{value.actualWeight}</td>
                              <td>{value.chargeWeight}</td>
                              <td>{value.freightCharge}</td>
                              <td>{value.otherCharge}</td>
                              <td>{value.gst}</td>
                              <td>{Math.ceil(value.total)}.00</td>
                            </tr>
                          );
                        })
                      ) : (
                        <Loader />
                      )}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="10">
                          <strong>Total</strong>
                        </td>
                        <td colSpan="10">
                          {data !== undefined &&
                            Math.ceil(data
                              .map((item) => item.total)
                              .reduce((prev, next) => prev + next))}.00
                        </td>
                      </tr>
                    </tfoot>
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

export default Billing;
