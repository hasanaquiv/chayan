import { useEffect } from "react";
import { CardBody, Row, Col, Card, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import converter from "number-to-words";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { getBilling } from "../../store/actions/billingAction";
import BillingTop from "./BillingTop";
import Loader from "../../components/HorizontalLayout/Loader";

//Import Images

const Billing = (props) => {
  let ids = props.location.pathname;
  const id = ids.substr(35,4);
  const invoiceNo = ids.substr(39,1);

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
                  <h4 className="float-end font-size-16">
                    <h6>
                      <strong>Chayan Logistics Pvt. Ltd.</strong>
                    </h6>
                    <h6>Khasra Number 647, A Block, Opposite Chaudhary Farm</h6>
                    <h6>Rangpuri Extension, New Delhi 110037</h6>
                    <h6>GST - 07AAJCC7802J1ZI</h6>
                  </h4>
                  <div className="mb-4">
                    <img
                      src={require("../../asset/images/logo.png").default}
                      alt="icon"
                      width="180px"
                    />
                  </div>
                </div>
                <hr />
                <BillingTop id={id} data={data} invoiceNo={invoiceNo} />
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
                              <td>{Math.ceil(value.actualWeight)}</td>
                              <td>{Math.ceil(value.chargeWeight)}</td>
                              <td>{Math.ceil(value.freightCharge)}</td>
                              <td>{Math.ceil(value.otherCharge)}</td>
                              <td>
                                {value.gstType === "IGST"
                                  ? Math.ceil(value.gst) + "  IGST"
                                  : Math.ceil(value.gst) / 2 + " CGST /" + Math.ceil(value.gst) / 2 + " SGST"
                                }
                              </td>
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
                        <td colSpan="5">
                          {data !== undefined &&
                            Math.ceil(
                              data
                                .map((item) => item.total)
                                .reduce((prev, next) => prev + next)
                            )}
                          .00
                        </td>

                        {/* <td colSpan="5">
                          {data !== undefined &&
                            converter.toWords(Math.ceil(
                              data
                                .map((item) => item.total)
                                .reduce((prev, next) => prev + next)
                            ))
                            }
                        </td> */}
                      </tr>
                    </tfoot>
                  </Table>
                </div>
                <div className="d-print-none">
                  <div className="float-end">
                    <Button
                      to="#"
                      className="btn btn-success waves-effect waves-light"
                      onClick={() => {
                        window.print();
                      }}
                    >
                      <i className="fa fa-print"></i>
                    </Button>{" "}
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
