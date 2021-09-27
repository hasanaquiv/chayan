import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Alert,
  Table,
  CardFooter,
} from "reactstrap";
import Logo from "../../assets/images/icon.png";
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
    origin,
    destination,
    consigner,
    consignee,
    billTo,
    actualWeight,
    chargeWeight,
    invoiceNo,
    invoiceAmount,
    waybill,
    paymentMode,
    pickupBranch,
    remarks,
    handling,
    consignerDetails,
  } = props.data;

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

  // console.log(total);
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
                    <img src={require("../../assets/images/icon.png").default} alt="icon" width="120px"/>
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
                            {consignerDetails.companyName}
                          </div>
                          <div style={style.borderReactBottom}>
                            {consignerDetails.phone}
                          </div>
                          <div>
                            Mumbai
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={style.borderReactBottom}>
                <Col sm={4} style={style.borderReactRight}>
                  No. of PCS.: 1
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
            <Button
              color="primary"
              type="submit"
              onClick={() => {
                window.print();
              }}
            >
              Print
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default PrintData;
