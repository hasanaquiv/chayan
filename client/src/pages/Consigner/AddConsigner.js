import { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { consignerAction } from "../../store/actions/consignerAction";

const Consigner = () => {
  //for change tooltip display properly

  const [consigner, setConsigner] = useState({
    userId:"",
    location: "",
    name: "",
    companyName: "",
    phone: "",
    email: "",
    gstNumber: "",
    freightCharge: "",
    fovCharges: "",
    docketCharges: "",
    odaCharges: "",
    fuelCharges: "",
    toPayCharges: "",
    customerType:"Billing",
    gstAmount:"",
    volumetric: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
  });

  const { loader, response } = useSelector((state) => state.consigners);
  const { username } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const inputHandle = (event) => {
    const { name, value } = event.target;

    setConsigner((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(consignerAction(consigner));
  };

  useEffect(() => {
    if (response) {
      toast.success(response.msg);
    }
    setConsigner({
      userId:username._id,
      location: "",
      name: "",
      companyName: "",
      phone: "",
      email: "",
      gstNumber: "",
      freightCharge: "",
      fovCharges: "",
      docketCharges: "",
      odaCharges: "",
      fuelCharges: "",
      toPayCharges: "",
      customerType:"Billing",
      gstAmount:"",
      volumetric: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pincode: "",
    });
  }, [response, username._id]);

  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="Consigner" breadcrumbItem="Add Consigner" />
        <Row>
          <Col xl="12">
            <ToastContainer />
            <Card>
              <CardBody>
                <AvForm className="needs-validation" onValidSubmit={onSubmit}>
                  <Row>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          name="location"
                          placeholder="Location"
                          type="text"
                          errorMessage="Enter Location"
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.location}
                          validate={{ required: { value: true } }}
                          id="validationCustom01"
                        />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          name="name"
                          placeholder="Name"
                          type="text"
                          errorMessage="Enter Name"
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.name}
                          validate={{ required: { value: true } }}
                          id="validationCustom01"
                        />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          name="companyName"
                          placeholder="Company Name"
                          type="text"
                          errorMessage="Enter Company name"
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.companyName}
                          validate={{ required: { value: true } }}
                          id="validationCustom02"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          name="phone"
                          placeholder="Phone Number"
                          type="number"
                          errorMessage=" Enter Phone Number."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.phone}
                          validate={{ required: { value: true } }}
                          id="validationCustom03"
                        />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          name="email"
                          placeholder="Email"
                          type="email"
                          errorMessage="Enter Email Address"
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.email}
                          validate={{ required: { value: true } }}
                          id="validationCustom04"
                        />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          name="gstNumber"
                          placeholder="GST Number"
                          type="text"
                          errorMessage=" Enter Company GST Number."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.gstNumber}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2">
                      <div className="mb-3">
                        <AvField
                          name="freightCharge"
                          placeholder="Freight(Rate/Kg)"
                          type="text"
                          errorMessage=" Enter Freight(Rate/Kg) Rate."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.freightCharge}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="mb-3">
                        <AvField
                          name="fovCharges"
                          placeholder="FOV Charges"
                          type="text"
                          errorMessage=" Enter FOV Charges."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.fovCharges}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="mb-3">
                        <AvField
                          name="docketCharges"
                          placeholder="Docket Charges"
                          type="text"
                          errorMessage=" Enter Docket Charges."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.docketCharges}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="mb-3">
                        <AvField
                          name="odaCharges"
                          placeholder="ODA Charges"
                          type="text"
                          errorMessage=" Enter ODA Charges."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.odaCharges}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="mb-3">
                        <AvField
                          name="fuelCharges"
                          placeholder="Fuel Charges"
                          type="text"
                          errorMessage=" Enter Fuel Charges."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.fuelCharges}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="mb-3">
                        <AvField
                          name="toPayCharges"
                          placeholder="To Pay Charges"
                          type="text"
                          errorMessage=" Enter To Pay Charges."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.toPayCharges}
                          validate={{ required: { value: false } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2">
                      <div className="mb-3">
                        <AvField
                          name="gstAmount"
                          placeholder="GST in Percentage"
                          type="number"
                          errorMessage="Please Add GST Amount"
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.gstAmount}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="mb-3">
                        <AvField
                          name="volumetric"
                          placeholder="Volumetric value"
                          type="number"
                          errorMessage="Enter Volumetric value"
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.volumetric}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          name="address1"
                          placeholder="Address Line 1"
                          type="text"
                          errorMessage="Enter Address Line 1."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.address1}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          name="address2"
                          placeholder="Address Line 2"
                          type="text"
                          errorMessage="Enter Address Line 2."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.address2}
                          validate={{ required: { value: false } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          name="city"
                          placeholder="City"
                          type="text"
                          errorMessage=" Enter City Name."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.city}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          name="state"
                          placeholder="State"
                          type="text"
                          errorMessage=" Enter State."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.state}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          name="pincode"
                          placeholder="Pincode"
                          type="number"
                          errorMessage=" Enter Pincode."
                          className="form-control"
                          onChange={inputHandle}
                          value={consigner.pincode}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                        <AvField
                          name="userId"
                          type="hidden"
                          value={username._id}
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="button-items">
                    <Button color="primary" type="submit">
                      {loader ? "Loading..." : "Save"}
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

export default Consigner;
