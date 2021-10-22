import { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, Button, CardFooter } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";

import { printAction } from "../../store/actions/printAction";

const style = {
  borderReact: {
    border: "2px solid #000000",
  },
  borderReactLeft: {
    borderLeft: "2px solid #000000",
  },
  borderReactRight: {
    borderRight: "2px solid #000000",
  },
  borderReactTop: {
    borderTop: "2px solid #000000",
  },
  borderReactBottom: {
    borderBottom: "2px solid #000000",
  },
};
const PrintData = (props) => {
  const {
    docketNumber,
    consigner,
    origin,
    destination,
    actualWeight,
    chargeWeight,
    box,
    invoiceNo,
    invoiceAmount,
    waybill,
    paymentMode,
    remarks,
    handling,
    consignerDetails,
    consigneeDetails,
  } = props.data;

  console.log(consignerDetails)

  let tFreight = chargeWeight * consignerDetails.freightCharge;
  const charge =
    tFreight +
    consignerDetails.docketCharges +
    consignerDetails.fovCharges +
    consignerDetails.odaCharges +
    consignerDetails.fuelCharges +
    consignerDetails.toPayCharges;

  const totalGst = (charge * 18) / 100;
  const total = totalGst + charge;

  const month = new Date().getMonth()

  const data = {
    id: props.id,
    docketNumber,
    consigner,
    consignerName:consignerDetails.companyName,
    origin,
    destination,
    actualWeight,
    chargeWeight,
    freightCharge: tFreight,
    otherCharge: charge,
    month,
    gst:totalGst,
    total,
  };

  const dispatch = useDispatch();
  const { response, loader } = useSelector((state) => state.prints);
  const [confirm, setConfirm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dynamicTitle, setDynamicTitle] = useState("");
  const [dynamicDescription, setDynamicDescription] = useState("");

  useEffect(() => {
    if (Object.keys(response).length > 0) {
      window.print();
    }
  }, [response]);

  return (
    <>
      <Card>
        <CardBody style={{ lineHeight: "25px" }}>
          <Row style={style.borderReact}>
            <Col sm={9}>
              <Row style={style.borderReactBottom}>
                <Col sm={6} style={style.borderReactRight}>
                  <Row>
                    <Col sm={4} className="mt-3">
                      <img
                        src={require("../../assets/images/icon.png").default}
                        alt="icon"
                        width="120px"
                      />
                    </Col>
                    <Col sm={8}>
                      <div className="mt-3 mb-3 ml-5">
                        <h3>Chayan Logistics</h3>
                        <h6>Chayan Enterprises Pvt. Ltd.</h6>
                        <h6>Khasra Number 647, A Block</h6>
                        <h6> Opposite Chaudhary Farm</h6>
                        <h6>Rangpuri Extension, New Delhi 110037</h6>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col sm={6} className="text-center">
                  <div className="mb-3 mt-3">
                    <h3>Docket Number</h3>
                    <h2 className="mt-3">{docketNumber}</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Row style={style.borderReactRight}>
                    <Col
                      sm={12}
                      className="text-center"
                      style={style.borderReactBottom}
                    >
                      <Row>
                        <Col sm={6} style={style.borderReactRight}>
                          <div style={style.borderReactBottom}>Origin</div>
                          <div style={style.borderReactBottom}>
                            <strong>Consigner Company Name:</strong>
                          </div>
                          <div style={style.borderReactBottom}>
                            <strong>Consigner Phone:</strong>
                          </div>
                          <div style={style.borderReactBottom}>
                            <strong>Consigner Email:</strong>
                          </div>
                          <div style={style.borderReactBottom}>
                            <strong>Consigner GST Number:</strong>
                          </div>
                          <div>
                            <strong>Address:</strong>
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div style={style.borderReactBottom}>{origin}</div>
                          <div style={style.borderReactBottom}>
                            {" "}
                            {consignerDetails.companyName}
                          </div>
                          <div style={style.borderReactBottom}>
                            {consignerDetails.phone}
                          </div>
                          <div style={style.borderReactBottom}>
                            {consignerDetails.email}
                          </div>
                          <div style={style.borderReactBottom}>
                            {consignerDetails.gstNumber}
                          </div>
                          <div>
                            {consignerDetails.address1}
                            {consignerDetails.address2}
                            <br />
                            {consignerDetails.city} {consignerDetails.state}{" "}
                            {consignerDetails.pincode}
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col
                  sm={6}
                  className="text-center"
                  style={style.borderReactBottom}
                >
                  <Row>
                    <Col sm={12} className="text-center">
                      <Row>
                        <Col sm={6}>
                          <div style={style.borderReactBottom}>Destination</div> 
                          <div style={style.borderReactBottom}>
                            <strong>Consignee Company Name:</strong>
                          </div>
                          <div style={style.borderReactBottom}>
                            <strong>Consignee Phone:</strong>
                          </div>
                          <div style={style.borderReactBottom}>
                            <strong>Consigner Address:</strong>
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div style={style.borderReactBottom}>
                            {destination}
                          </div>
                          <div style={style.borderReactBottom}>
                            {" "}
                            {consigneeDetails.companyName}
                          </div>
                          <div style={style.borderReactBottom}>
                            {consigneeDetails.phone}
                          </div>
                          <div>
                            {consigneeDetails.address1}
                            {consigneeDetails.address2}
                            <br />
                            {consigneeDetails.city} {consigneeDetails.state}{" "}
                            {consigneeDetails.pincode}</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={style.borderReactBottom}>
                <Col sm={4} style={style.borderReactRight}>
                  No. of PCS.: {box}
                </Col>
                <Col sm={4} style={style.borderReactRight}>
                  Actual Weight: {actualWeight} KG
                </Col>
                <Col sm={4}>Charge Weight: {chargeWeight} KG</Col>
              </Row>
              <Row>
                <Col sm={4} style={style.borderReactRight}>
                  Waybill: {waybill}
                </Col>
                <Col sm={4} style={style.borderReactRight}>
                  Payment Mode: {paymentMode}
                </Col>
                <Col sm={4}>Remarks: {remarks}</Col>
              </Row>
            </Col>
            <Col sm={3} className="text-center" style={style.borderReactLeft}>
              <Row>
                <Col sm={12} style={style.borderReactBottom}>
                  Date
                </Col>
                <Col sm={12} style={style.borderReactBottom}>
                  Origin : {origin}
                </Col>
                <Col sm={12} style={style.borderReactBottom}>
                  Destination : {destination}
                </Col>
                <Col sm={12}>
                  {consignerDetails.customerType !== "Billing" ? (
                    <Row>
                      <Col sm={6} style={style.borderReactRight}>
                        <div>Charges</div>
                        <div>Freight({consignerDetails.freightCharge}/kg)</div>
                        <div>Docket</div>
                        <div>FOV</div>
                        <div>ODA</div>
                        <div>Fuel</div>
                        <div>To Pay</div>
                        <div>GST(18%)</div>
                        <div style={style.borderReactTop}>Total</div>
                      </Col>
                      <Col sm={6}>
                        <div>Amount</div>
                        <div>{tFreight}.00</div>
                        <div>{consignerDetails.docketCharges}.00</div>
                        <div>{consignerDetails.fovCharges}.00</div>
                        <div>{consignerDetails.odaCharges}.00</div>
                        <div>{consignerDetails.fuelCharges}.00</div>
                        <div>{consignerDetails.toPayCharges}.00</div>
                        <div>{totalGst}%</div>
                        <div style={style.borderReactTop}>
                          <strong>{total}</strong>
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col sm={12}>
                        <h1>Billing Not Available</h1>
                      </Col>
                    </Row>
                  )}
                </Col>
              </Row>
              <Row style={style.borderReactTop}>
                <Col sm={12}> Invoice Number: {invoiceNo}</Col>
                <Col sm={12} style={style.borderReactTop}>
                  Invoice Amount: {invoiceAmount}
                </Col>
                {/* <Col sm={12} style={style.borderReactTop}>COD</Col> */}
                {/* <Col sm={12} style={style.borderReactTop}>To Pay</Col> */}
              </Row>
            </Col>
          </Row>
          <Row style={style.borderReactBottom}>
            <Col sm={4} style={style.borderReactLeft}>
              <div>Consignor's Declaration</div>
              <div>
                I/We have read carefully & verified the contains filled in this
                Docket and agree to the terms and conditions
              </div>
              <div>Signature Date</div>
            </Col>
            <Col sm={4} style={style.borderReactLeft}>
              <div>Received In Good Condition </div>
            </Col>
            <Col sm={4} style={style.borderReactRight}>
              <span>Picked Up By</span> Chayan Enterprises Pvt Ltd
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <div className="button-items">
            <Button color="primary" type="submit" onClick={"printBooking"}>
              Update
            </Button>
            <Button
              color="primary"
              onClick={() => {
                setConfirm(true);
              }}
              id="sa-params"
            >
              Print
            </Button>
            {confirm ? (
              <SweetAlert
                title="Are you sure Want To Print?"
                warning
                showCancel
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={() => {
                  setConfirm(false);
                  setSuccess(true);
                  dispatch(printAction(data));
                }}
                onCancel={() => {
                  setConfirm(false);
                  setSuccess(true);
                  setDynamicDescription("Your imaginary file is safe :)");
                  setDynamicTitle("Cancelled");
                }}
              >
              </SweetAlert>
            ) : null}
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default PrintData;
