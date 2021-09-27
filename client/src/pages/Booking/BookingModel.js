import { useState, useEffect } from "react";

import { Row, Col, Button, Modal } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import { consigneeAction } from "../../store/actions/consigneeAction";

const BookingModel = ({parentCallback}) => {
  const [modal_large, setModal_large] = useState(false);

  function tog_large() {
    setModal_large(!modal_large);
    removeBodyCss();
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  
  const [consignee, setConsignee] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
  });

  const { loader, responseCon } = useSelector((state) => state.consignees);
  const dispatch = useDispatch();

  const inputHandle = (event) => {
    const { name, value } = event.target;

    setConsignee((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(consigneeAction(consignee));
  };

  useEffect(() => {    
    if(responseCon.msg === "Add successfully" ){
      parentCallback(responseCon.response.consigneeCode)
    } else{
      parentCallback("")
    }
    setConsignee({
      name: "",
      companyName: "",
      phone: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pincode: "",
    });
    setModal_large(false);
  }, [parentCallback, responseCon]);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          tog_large();
        }}
        className="btn btn-primary waves-effect"
        data-toggle="modal"
        data-target=".bs-example-modal-lg"
      >
        <i className="bx bx-plus font-size-16 align-middle me-0" />
      </button>
      <Modal
        size="lg"
        isOpen={modal_large}
        toggle={() => {
          tog_large();
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myLargeModalLabel">
            Add Consignee
          </h5>
          <button
            onClick={() => {
              setModal_large(false);
            }}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <AvForm className="needs-validation" onValidSubmit={onSubmit}>
            <Row>
              <Col md="6">
                <div className="mb-3">
                  <AvField
                    name="name"
                    placeholder="Name"
                    type="text"
                    errorMessage="Enter Name"
                    className="form-control"
                    onChange={inputHandle}
                    value={consignee.name}
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
                    onChange={inputHandle}
                    value={consignee.companyName}
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
                    onChange={inputHandle}
                    value={consignee.phone}
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
                    onChange={inputHandle}
                    value={consignee.email}
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
                    onChange={inputHandle}
                    value={consignee.address1}
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
                    onChange={inputHandle}
                    value={consignee.address2}
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
                    onChange={inputHandle}
                    value={consignee.city}
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
                    value={consignee.state}
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
                    value={consignee.pincode}
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
        </div>
      </Modal>
    </>
  );
};

export default BookingModel;
