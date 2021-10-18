import { useState, useEffect } from "react";

import { Row, Col, Button, Card, CardBody } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import {
  getConsignee,
  updateConsignees,
} from "../../store/actions/consigneeAction";

const ConsigneeUpdate = (props) => {
  let ids = props.history.location.pathname;
  const id = ids.substr(18);

  const { loader, consigneeFind,updateResponse } = useSelector((state) => state.consignees);

  const dispatch = useDispatch();

  const onSubmit = (event, value) => {
    event.preventDefault();
    dispatch(updateConsignees(value));
  };

  useEffect(() => {
    if(updateResponse){
      toast.success(updateResponse.msg);
    }
    dispatch(getConsignee(id));
  }, [dispatch, id, updateResponse]);

  console.log(loader);
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
                  <AvField
                    name="id"
                    type="hidden"
                    value={consigneeFind._id}
                  />
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="name"
                          placeholder="Name"
                          type="text"
                          errorMessage="Enter Name"
                          className="form-control"
                          value={consigneeFind.name}
                          validate={{ required: { value: true } }}
                          id="validationCustom01"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="companyName"
                          placeholder="Company Name"
                          type="text"
                          errorMessage="Enter Company name"
                          className="form-control"
                          value={consigneeFind.companyName}
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
                          name="phone"
                          placeholder="Phone Number"
                          type="number"
                          errorMessage=" Enter Phone Number."
                          className="form-control"
                          value={consigneeFind.phone}
                          validate={{ required: { value: true } }}
                          id="validationCustom03"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="email"
                          placeholder="Email"
                          type="email"
                          errorMessage="Enter Email Address"
                          className="form-control"
                          value={consigneeFind.email}
                          validate={{ required: { value: true } }}
                          id="validationCustom04"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="address1"
                          placeholder="Address Line 1"
                          type="text"
                          errorMessage="Enter Address Line 1."
                          className="form-control"
                          value={consigneeFind.address1}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="address2"
                          placeholder="Address Line 2"
                          type="text"
                          errorMessage="Enter Address Line 2."
                          className="form-control"
                          value={consigneeFind.address2}
                          validate={{ required: { value: true } }}
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
                          value={consigneeFind.city}
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
                          value={consigneeFind.state}
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
                          value={consigneeFind.pincode}
                          validate={{ required: { value: true } }}
                          id="validationCustom05"
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

export default ConsigneeUpdate;
