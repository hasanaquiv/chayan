import { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";

import BookingModel from "./BookingModel";
import VolumetricModel from "./VolumetricModel";
// import InputField from "./InputField";

import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
// import LatestBooking from "../Dashboard/LatestBooking";
import { bookingAction } from "../../store/actions/bookingAction";
import { getAllConsigners } from "../../store/actions/consignerAction";

const Booking = (props) => {
  //for change tooltip display properly
  const [add, setAdd] = useState("");
  const [compareAdd, setCompareAdd] = useState("");
  const [consigneeValue, setConsigneeValue] = useState(0);
  const [consignerVol, setConsignerVol] = useState("CHC6");
  const { username } = useSelector((state) => state.users);
  const { loader, response } = useSelector((state) => state.bookings);
  const { consigners } = useSelector((state) => state.consigners);
  const dispatch = useDispatch();

  const callback = (count) => {
    setAdd(count);
  };

  const consigneeCallback = (consigneeDetails) => {
    setConsigneeValue(consigneeDetails);
  };

  let area = username.location;

  const [booking, setBooking] = useState({
    docketNumber: "",
    origin: "",
    destination: "",
    consigner: "",
    consignee: consigneeValue,
    actualWeight: "",
    chargeWeight: "",
    volumetricWeight: add,
    invoiceNo: "",
    invoiceAmount: "",
    waybill: "",
    paymentMode: "",
    pickupBranch: area,
    remarks: "",
    handling: false,
  });

  const data = consigners.response;

  const inputHandle = (event) => {
    const { name, value } = event.target;
    if (name === "consigner") {
      const userExists = data.some((data) => data.consignerCode === value);
      if (userExists) {
        setConsignerVol(value);
      } else {
      }
    }
    if(name === "actualWeight"){
      if(value < add){
        setCompareAdd(add)
      } else{
        setCompareAdd(value)
      }
    }
    setBooking((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(bookingAction(booking));
  };

  useEffect(() => {
    dispatch(getAllConsigners());
    if (Object.keys(response).length > 0) {
      alert(response.msg);
      props.history.push(`/print-docket/${response.response._id}`);
      window.location.reload();
    }

    setBooking({
      docketNumber: "",
      origin: "",
      destination: "",
      consigner: "",
      consignee: consigneeValue,
      actualWeight: "",
      chargeWeight: compareAdd,
      volumetricWeight: add,
      invoiceNo: "",
      invoiceAmount: "",
      waybill: "",
      paymentMode: "",
      pickupBranch: area,
      remarks: "",
      handling: false,
    });
  }, [add, area, compareAdd, consigneeValue, consignerVol, dispatch, props.history, response]);

  // console.log(compareAdd)

  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="Booking" breadcrumbItem="New Booking" />
        <Row>
          <Col xl="12">
            <ToastContainer />
            <Card>
              <CardBody>
                <AvForm className="needs-validation" onValidSubmit={onSubmit}>
                  <Row>
                    {/* Docket Number */}
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          name="docketNumber"
                          placeholder="Docket Number"
                          type="text"
                          errorMessage="Enter Docket Number"
                          className="form-control"
                          onChange={inputHandle}
                          value={booking.docketNumber}
                          validate={{ required: { value: true } }}
                          id="validationCustom01"
                          required
                        />
                      </div>
                    </Col>
                    {/* Consigner Details */}
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          className="form-control"
                          name="consigner"
                          list="datalistOptions"
                          placeholder="Consigner Details"
                          errorMessage=" Please provide Shipper Code."
                          onChange={inputHandle}
                          validate={{ required: { value: true } }}
                          id="validationCustom03"
                        />
                        <datalist
                          id="datalistOptions"
                          value={booking.consigner}
                        >
                          {data !== undefined &&
                            data.map((value, index) => {
                              return (
                                <option value={value.consignerCode} key={index}>
                                  {value.companyName}({value.location})
                                </option>
                              );
                            })}
                        </datalist>
                      </div>
                    </Col>
                    {/* Consignee Details */}
                    <Col md="3">
                      <div className="mb-3">
                        <Row>
                          <Col md={9}>
                            <AvField
                              name="consignee"
                              placeholder="Consignee Details"
                              type="text"
                              errorMessage="Please provide Consignee Details."
                              className="form-control"
                              onChange={inputHandle}
                              value={booking.consignee}
                              validate={{ required: { value: true } }}
                              id="validationCustom04"
                            />
                          </Col>
                          <Col md={1}>
                            <BookingModel parentCallback={consigneeCallback} />
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    {/* Volumetric weight */}
                    <Col md="3">
                      <div className="mb-3">
                        <Row>
                          <Col md={9}>
                            <AvField
                              name="volumetricWeight"
                              placeholder="Volumetric weight"
                              type="number"
                              errorMessage="Enter Volumetric Weight."
                              className="form-control"
                              onChange={inputHandle}
                              value={booking.volumetricWeight}
                              validate={{ required: { value: true } }}
                              id="validationCustom05"
                              disabled
                            />
                          </Col>
                          <Col md={3}>
                            <VolumetricModel
                              parentCallback={callback}
                              consignerVol={consignerVol}
                            />
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {/* Origin */}
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          name="origin"
                          placeholder="Origin"
                          type="text"
                          errorMessage="Enter Origin"
                          className="form-control"
                          onChange={inputHandle}
                          value={booking.origin}
                          validate={{ required: { value: true } }}
                          id="validationCustom01"
                          required
                        />
                      </div>
                    </Col>
                    {/* Destination */}
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          name="destination"
                          placeholder="Destination"
                          type="text"
                          errorMessage="Enter Destination"
                          className="form-control"
                          onChange={inputHandle}
                          value={booking.destination}
                          validate={{ required: { value: true } }}
                          id="validationCustom02"
                        />
                      </div>
                    </Col>
                    {/* Actual Weight */}
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          name="actualWeight"
                          placeholder="Actual Weight"
                          type="number"
                          errorMessage="Enter Actual Weight."
                          className="form-control"
                          onChange={inputHandle}
                          value={booking.actualWeight}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    {/* charged Weight */}
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          name="chargeWeight"
                          placeholder="Charged Weight"
                          type="number"
                          errorMessage="Enter Charge Weight."
                          className="form-control"
                          onChange={inputHandle}
                          value={booking.chargeWeight}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                          disabled
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {/* Payment Mode */}
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          className="form-control"
                          type="select"
                          name="paymentMode"
                          placeholder="Payment Mode"
                          errorMessage=" Please Provide Payment Mode."
                          onChange={inputHandle}
                          value={booking.paymentMode}
                          validate={{ required: { value: true } }}
                          id="validationCustom03"
                        >
                          <option>Select Payment Mode</option>
                          <option value="Cash">Cash</option>
                          <option value="Billing">Billing</option>
                          <option value="To Pay">To Pay</option>
                        </AvField>
                      </div>
                    </Col>
                    {/* Branch */}
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          name="pickupBranch"
                          placeholder="Pickup State/Branch"
                          type="text"
                          errorMessage=" Enter Pickup State/Branch."
                          className="form-control"
                          onChange={inputHandle}
                          value={booking.pickupBranch}
                          // value="New Delhi"
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                          disabled
                        />
                      </div>
                    </Col>
                    {/* Invoice Number */}
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          name="invoiceNo"
                          placeholder="Invoice Number"
                          type="text"
                          errorMessage=" Enter Invoice Number."
                          className="form-control"
                          onChange={inputHandle}
                          value={booking.invoiceNo}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    {/* Invoice Value */}
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          name="invoiceAmount"
                          placeholder="Invoice Value"
                          type="number"
                          errorMessage=" Enter Invoice Value."
                          className="form-control"
                          onChange={inputHandle}
                          value={booking.invoiceAmount}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {/* Waybill Number */}
                    <Col md="12">
                      <div className="mb-3">
                        <AvField
                          name="waybill"
                          placeholder="Waybill Number"
                          type="text"
                          errorMessage=" Waybill Number."
                          className="form-control"
                          onChange={inputHandle}
                          value={booking.waybill}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <div className="mb-3">
                        <AvField
                          className="mb-3"
                          type="textarea"
                          rows="5"
                          name="remarks"
                          id="address"
                          placeholder="Remarks"
                          onChange={inputHandle}
                          value={booking.remarks}
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      name="handling"
                      type="checkbox"
                      onChange={inputHandle}
                      value={!booking.handle}
                      id="invalidCheck"
                    />{" "}
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Handle With Care
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                  <div className="button-items">
                    <Button color="primary" type="submit">
                      {loader ? "Loading..." : "Draft"}
                    </Button>
                  </div>
                </AvForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Booking;
