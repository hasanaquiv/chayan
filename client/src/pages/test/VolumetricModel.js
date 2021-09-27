import { useState, useEffect } from "react";

import { Row, Col, Button, Modal } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import { consignerAction } from "../../store/actions/consignerAction";

const VolumetricModel = ({ parentCallback }) => {
  const [modal_small, setModal_small] = useState(false);

  function tog_small() {
    setModal_small(!modal_small);
    removeBodyCss();
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  const [volumetric, setVolumetric] = useState({
    length: "",
    width: "",
    height: "",
    volume: "4000",
  });

  const { loader, response } = useSelector((state) => state.consigners);
  const dispatch = useDispatch();

  const inputHandle = (event) => {
    const { name, value } = event.target;

    setVolumetric((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const {length, width, height, volume} = volumetric
    const area = (length*width*height)/volume;
    setModal_small(false);    
    parentCallback(area);
  };

  useEffect(() => {
    if (response) {
      toast.success(response.msg);
    }
  }, [response]);
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
        <i className="bx bx-plus font-size-16 align-middle me-0" />
      </button>
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
                    onChange={inputHandle}
                    value={volumetric.length}
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
                    onChange={inputHandle}
                    value={volumetric.width}
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
                    onChange={inputHandle}
                    value={volumetric.height}
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
                    onChange={inputHandle}
                    value={volumetric.volume}
                    // value="4000"
                    validate={{ required: { value: true } }}
                    id="validationCustom03"
                    disabled
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

export default VolumetricModel;
