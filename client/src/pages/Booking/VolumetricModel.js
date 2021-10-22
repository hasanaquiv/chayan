/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { Row, Col, Button, Modal } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from "axios";

const VolumetricModel = (props) => {
  const [modal_small, setModal_small] = useState(false);
  const [vol, setVol] = useState();
  const [formValues, setFormValues] = useState({
    box: "",
    length: "",
    width: "",
    height: "",
    weight: "",
  });
  const [total, setTotal] = useState([0]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const addFormFields = () => {
    const { length, width, height, weight } = formValues;
    const area = Math.ceil((length * width * height) / vol);
    if (weight > area) {
      setTotal((preValue) => [...preValue, weight]);
    } else {
      setTotal((preValue) => [...preValue, area]);
    }
    alert("Added Successfully");
    setFormValues({
      box: "",
      weight: "",
    });
  };

  const dataVol = async (id) => {
    const { data } = await axios.get(`/api/consigner-code/${id}`);
    setVol(data.response.volumetric);
  };

  function tog_small() {
    setModal_small(!modal_small);
    removeBodyCss();
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }
  const finalTotal = total.reduce((a, b) => Number(a) + Number(b));

  const onSubmit = (event) => {
    event.preventDefault();
    setModal_small(false);
    props.parentCallback(finalTotal);
    setTotal([0])
  };

  useEffect(() => {
    dataVol(props.consignerVol);
  }, [props.consignerVol]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          tog_small();
        }}
        className="btn btn-primary waves-effect"
        data-toggle="modal"
        data-target=".bs-example-modal-sm"
      >
        <i className="bx bx-plus font-size-16 align-middle me-0" />{" "}
      </button>
      <Modal
        size="lg"
        isOpen={modal_small}
        toggle={() => {
          tog_small();
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myLargeModalLabel">
            Add Volumetric
          </h5>
          <button
            onClick={() => {
              setModal_small(false);
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
              <Col md="2">
                <div className="mb-3">
                  <AvField
                    name="box"
                    placeholder="Box"
                    type="number"
                    errorMessage="Enter Number Of Box"
                    className="form-control"
                    onChange={handleChange}
                    value={formValues.box}
                    validate={{ required: { value: false } }}
                    id="validationCustom01"
                  />
                </div>
              </Col>
              <Col md="2">
                <div className="mb-3">
                  <AvField
                    name="length"
                    placeholder="Length"
                    type="number"
                    errorMessage="Enter Lenth"
                    className="form-control"
                    onChange={handleChange}
                    value={formValues.length}
                    validate={{ required: { value: false } }}
                    id="validationCustom01"
                  />
                </div>
              </Col>
              <Col md="2">
                <div className="mb-3">
                  <AvField
                    name="width"
                    placeholder="Width"
                    type="number"
                    errorMessage="Enter Width"
                    className="form-control"
                    onChange={handleChange}
                    value={formValues.width}
                    validate={{ required: { value: false } }}
                    id="validationCustom02"
                  />
                </div>
              </Col>
              <Col md="2">
                <div className="mb-3">
                  <AvField
                    name="height"
                    placeholder="Height"
                    type="number"
                    errorMessage=" Enter Height."
                    className="form-control"
                    onChange={handleChange}
                    value={formValues.height}
                    validate={{ required: { value: false } }}
                    id="validationCustom03"
                  />
                </div>
              </Col>
              <Col md="2">
                <div className="mb-3">
                  <AvField
                    name="weight"
                    placeholder="Weight"
                    type="number"
                    errorMessage="Weight."
                    className="form-control"
                    onChange={handleChange}
                    value={formValues.weight}
                    validate={{ required: { value: false } }}
                    id="validationCustom05"
                  />
                </div>
              </Col>
              <Col md={1} className="mb-3">
                <input
                  type="text"
                  value={vol}
                  className="form-control"
                  disabled
                />
              </Col>
              <Col md={1} className="mb-3">
                <button
                  type="button"
                  onClick={() => addFormFields()}
                  className="btn btn-primary waves-effect"
                  data-toggle="modal"
                  data-target=".bs-example-modal-sm"
                >
                  <i className="bx bx-plus font-size-16 align-middle me-0" />{" "}
                </button>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <div className="mb-3">
                  <input
                    name="volume"
                    type="number"
                    className="form-control"
                    value={finalTotal}
                    id="validationCustom03"
                    disabled
                  />
                </div>
              </Col>
              <Col md="3">
                <div className="button-items">
                  <Button color="primary" type="submit">
                    {/* {loader ? "Loading..." : "Save"} */}
                    Add
                  </Button>
                </div>
              </Col>
              {/* <Col md="3">
                <div className="button-items">
                  <Button
                    color="primary"
                    onClick={() => {
                      setTotal("");
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </Col> */}
            </Row>
          </AvForm>
        </div>
      </Modal>
    </>
  );
};

export default VolumetricModel;
