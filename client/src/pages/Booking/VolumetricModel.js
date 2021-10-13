/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { Row, Col, Button, Modal } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from "axios";

const VolumetricModel = (props) => {
  const [modal_small, setModal_small] = useState(false);  
  const [vol, setVol] = useState()

  const dataVol = async (id) =>{
    const { data } = await axios.get(`/api/consigner-code/${id}`); 
      setVol(data.response.volumetric)
  }

  function tog_small() {
    setModal_small(!modal_small);
    removeBodyCss();
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding"); 
  }


  const onSubmit = (event,value) => {
    event.preventDefault();
    const {length, width, height, volume} = value
    const area = (length*width*height)/volume;
    setModal_small(false);    
    props.parentCallback(area);   
  };

  useEffect(() => {
    dataVol(props.consignerVol)
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
        <i className="bx bx-plus font-size-16 align-middle me-0" />      </button>
      <Modal
        size="sm"
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
              <Col md="6">
                <div className="mb-3">
                  <AvField
                    name="length"
                    placeholder="Length"
                    type="number"
                    errorMessage="Enter Lenth"
                    className="form-control"
                    value=""
                    validate={{ required: { value: true } }}
                    id="validationCustom01"
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="mb-3">
                  <AvField
                    name="width"
                    placeholder="Width"
                    type="number"
                    errorMessage="Enter Width"
                    className="form-control"
                    value=""
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
                    name="height"
                    placeholder="Height"
                    type="number"
                    errorMessage=" Enter Height."
                    className="form-control"
                    value=""
                    validate={{ required: { value: true } }}
                    id="validationCustom03"
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="mb-3">
                  <AvField
                    name="volume"
                    placeholder="Phone Number"
                    type="number"
                    errorMessage=" Enter Phone Number."
                    className="form-control"
                    value={vol}
                    validate={{ required: { value: true } }}
                    id="validationCustom03"
                    disabled
                  />
                </div>
              </Col>
            </Row>
            <div className="button-items">
              <Button color="primary" type="submit">
                {/* {loader ? "Loading..." : "Save"} */}
                Add
              </Button>
            </div>
          </AvForm>
        </div>
      </Modal>
    </>
  );
};

export default VolumetricModel;
