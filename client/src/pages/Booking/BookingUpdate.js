import { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";

import BookingModel from "./BookingModel";
import VolumetricModel from "./VolumetricModel";
// import Select from "react-select";

import "react-toastify/dist/ReactToastify.css"; 

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { bookingAction } from "../../store/actions/bookingAction";
import { getAllConsigners } from "../../store/actions/consignerAction";

const Booking = (props) => {
  //for change tooltip display properly
  const [add, setAdd] = useState("");
  const [consigneeValue, setConsigneeValue] = useState(0);
  const { username } = useSelector((state) => state.users);  
  const { loader, response } = useSelector((state) => state.bookings);
  const { consigners } = useSelector((state) => state.consigners);
  const { bookings } = useSelector((state) => state.consigners);
  const dispatch = useDispatch();

  let ids = props.location.pathname;
  const id = ids.substr(16);

  const callback = (count) => {
    setAdd(count);
  };

  const consigneeCallback = (consigneeDetails) => {
    setConsigneeValue(consigneeDetails);
  };

  let area = username.location;

  const [booking, setBooking] = useState({
    docketNumber:"",
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

  const inputHandle = (event) => {
    const { name, value } = event.target;

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
    if (response) {
      toast.success(response.msg);
    }
    setBooking({
      docketNumber:"",
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
  }, [add, area, consigneeValue, dispatch, response]);

  const data = consigners.response;

  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="Booking" breadcrumbItem="New Booking" />
        <Row>
          <Col xl="8">
            <ToastContainer />
            <Card>
              <CardBody>
              <VolumetricModel parentCallback={callback} />
                <AvForm className="needs-validation" onValidSubmit={onSubmit}>
                  <Row>
                    <Col md="4">
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
                    <Col md="4">
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
                    <Col md="4">
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
                  </Row>
                  <Row>
                    <Col md="6">
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
                              return <option value={value.consignerCode}>{value.companyName}({value.location})</option>;
                            })}
                        </datalist>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <Row>
                          <Col md={10}>
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
                          <Col md="2">
                            <BookingModel parentCallback={consigneeCallback} />
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md="4">
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
                    <Col md="3">
                      <div className="mb-3">
                        <AvField
                          name="chargeWeight"
                          placeholder="charged Weight"
                          type="number"
                          errorMessage="Enter Charge Weight."
                          className="form-control"
                          onChange={inputHandle}
                          value={booking.chargeWeight}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>

                    <Col md="4">
                      <div className="mb-3">
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
                      </div>
                    </Col>
                    <Col md="1">
                      
                    </Col>
                    <Col md="6">
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
                    <Col md="6">
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
                    <Col md="6">
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
                    <Col md="6">
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

          <Col xl="4">
            {/* <LatestBooking bookings={bookings} /> */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Booking;
