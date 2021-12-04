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
  const [consignerVol, setConsignerVol] = useState("CHC1");
  const { consigners } = useSelector((state) => state.consigners);
  const { username } = useSelector((state) => state.users);

  // calling props ================================
  const { add, consigneeValue, callback, consigneeCallback, onSubmit, area } =
    props;

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
              <Col md="2">
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
              <Col md="2">
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
                        value={consigneeValue}
                        validate={{ required: { value: true } }}
                        id="validationCustom04"
                        disabled
                      />
                    </Col>
                    <Col md={1}>
                      <BookingModel parentCallback={consigneeCallback} />
                    </Col>
                  </Row>
                </div>
              </Col>
              {/* Volumetric weight */}
              <Col md="5">
                <div className="mb-3">
                  <Row>
                    <Col md={3}>
                      <AvField
                        name="box"
                        placeholder="Box"
                        type="number"
                        errorMessage="Enter Number Box."
                        className="form-control"
                        value=""
                        validate={{ required: { value: true } }}
                        id="validationCustom05"
                      />
                    </Col>
                    <Col md={4}>
                      <AvField
                        name="actualWeight"
                        placeholder="Actual Weight"
                        type="number"
                        errorMessage="Enter Actual Weight"
                        className="form-control"
                        value=""
                        validate={{ required: { value: true } }}
                        id="validationCustom05"
                      />
                    </Col>
                    <Col md={3}>
                      <AvField
                        name="chargeWeight"
                        placeholder="Weight"
                        type="number"
                        errorMessage="Enter Charge Weight."
                        className="form-control"
                        value={add}
                        validate={{ required: { value: true } }}
                        id="validationCustom05"
                        disabled
                      />
                    </Col>
                    <Col md={1}>
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
                    value=""
                    validate={{ required: { value: true } }}
                    id="validationCustom02"
                  />
                </div>
              </Col>
              {/* Payment Mode */}
              <Col md="3">
                <div className="mb-3">
                  <AvField
                    className="form-control"
                    type="text"
                    name="paymentMode"
                    placeholder="Payment Mode"
                    errorMessage=" Please Provide Payment Mode."
                    value="Billing"
                    validate={{ required: { value: true } }}
                    id="validationCustom03"
                    disabled
                  ></AvField>
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
                    value={area}
                    validate={{ required: { value: true } }}
                    id="validationCustom05"
                    disabled
                  />
                </div>
              </Col>
            </Row>
            <Row>
              {/* Invoice Number */}
              <Col md="3">
                <div className="mb-3">
                  <AvField
                    name="invoiceNo"
                    placeholder="Invoice Number"
                    type="text"
                    errorMessage=" Enter Invoice Number."
                    className="form-control"
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
                    value=""
                    validate={{ required: { value: true } }}
                    id="validationCustom05"
                  />
                </div>
              </Col>
              {/* Waybill Number */}
              <Col md="3">
                <div className="mb-3">
                  <AvField
                    name="waybill"
                    placeholder="Waybill Number"
                    type="text"
                    errorMessage=" Waybill Number."
                    className="form-control"
                    value=""
                    validate={{ required: { value: false } }}
                    id="validationCustom05"
                  />
                </div>
              </Col>
              {/* Waybill Number */}
              <Col md="3">
                <div className="mb-3">
                  <AvField
                    name="gstType"
                    placeholder="Waybill Number"
                    type="select"
                    errorMessage=" Enter GST Type IGST/CGST."
                    className="form-control"
                    value=""
                    validate={{ required: { value: false } }}
                    id="validationCustom05"
                  >
                  <option>Select GST Type</option>
                  <option value="IGST">IGST</option>
                  <option value="CGST">
                    CGST
                  </option>
                  </AvField>
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
                    value=""
                  />
                  <AvField name="userId" type="hidden" value={username._id} />
                </div>
              </Col>
            </Row>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                name="handling"
                type="checkbox"
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
