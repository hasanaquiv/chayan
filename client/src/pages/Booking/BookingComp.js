import { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

import BookingModel from "./BookingModel";
import VolumetricModel from "./VolumetricModel";
import { useSelector, useDispatch } from "react-redux";

import { getAllConsigners } from "../../store/actions/consignerAction";

const BookingComp = (props) => {
  const dispatch = useDispatch();
  const [consigner, setConsigner] = useState();
  const [consignerVol, setConsignerVol] = useState("CHC6");
  const [compareAdd, setCompareAdd] = useState("");
  const { consigners } = useSelector((state) => state.consigners);

  // calling props ================================
  const {
    add,
    consigneeValue,
    callback,
    consigneeCallback,
    onSubmit,
    area,
  } = props;

  useEffect(() => {
    dispatch(getAllConsigners());
  }, [dispatch]);

  const data = consigners.response;

  return (
    <>
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
                    // onChange={inputHandle}
                    // value={booking.docketNumber}
                    value=""
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
                    onChange={(event) => {
                      const { value } = event.target;
                      const userExists = data.some(
                        (data) => data.consignerCode === value
                      );
                      if (userExists) {
                        setConsignerVol(value);
                      }
                      setConsigner(value);
                    }}
                    validate={{ required: { value: true } }}
                    id="validationCustom03"
                  />
                  <datalist id="datalistOptions" value={consigner}>
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
                        // onChange={inputHandle}
                        // value={booking.consignee}
                        value={consigneeValue}
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
                        // onChange={inputHandle}
                        // value={booking.volumetricWeight}
                        value={add}
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
                    // onChange={inputHandle}
                    // value={booking.origin}
                    value=""
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
                    // onChange={inputHandle}
                    // value={booking.destination}
                    value=""
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
                    onChange={(event) => {
                      const { value } = event.target;
                      if (value < add) {
                        setCompareAdd(add);
                      } else {
                        setCompareAdd(value);
                      }
                      //   console.log(value)
                    }}
                    // value={booking.actualWeight}
                    value=""
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
                    // onChange={inputHandle}
                    // value={booking.chargeWeight}
                    value={compareAdd}
                    validate={{ required: { value: true } }}
                    id="validationCustom05"
                    // disabled
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
                    // onChange={inputHandle}
                    // value={booking.paymentMode}
                    value=""
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
                    // onChange={inputHandle}
                    // value={booking.pickupBranch}
                    value={area}
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
                    // onChange={inputHandle}
                    // value={booking.invoiceNo}
                    value=""
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
                    // onChange={inputHandle}
                    // value={booking.invoiceAmount}
                    value=""
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
                    // onChange={inputHandle}
                    // value={booking.waybill}
                    value=""
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
                    // onChange={inputHandle}
                    // value={booking.remarks}
                    value=""
                  />
                </div>
              </Col>
            </Row>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                name="handling"
                type="checkbox"
                // onChange={inputHandle}
                // value={!booking.handle}
                value=""
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
                {/* {loader ? "Loading..." : "Draft"} */}
                Save
              </Button>
            </div>
          </AvForm>
        </CardBody>
      </Card>
    </>
  );
};

export default BookingComp;
