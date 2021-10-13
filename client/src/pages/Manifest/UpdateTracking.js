import { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { updateTrackingAction } from "../../store/actions/trackingAction";

const UpdateTracking = (props) => {
  //for change tooltip display properly

  let ids = props.location.pathname;
  const id = ids.substr(42);

  const dispatch = useDispatch();
  const { trackingResponse, loader, error } = useSelector((state) => state.trackings);
  const { username } = useSelector((state) => state.users);
  let location = username.location;
  const [tracking, setTracking] = useState({
    locations: location,
    vehicleNumber: id,
    manifestNUmbers: "",
  });

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setTracking((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTrackingAction(tracking));    
    setTracking({
      locations: location,
      vehicleNumber: id,
      manifestNUmbers: "",
    });
  };

  useEffect(() => {
    if (trackingResponse) {
      toast.success(trackingResponse.msg);
    }
  }, [trackingResponse, id]);

  // console.log(username, "get tracking")
  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="tracking" breadcrumbItem="New Add tracking" />
        <ToastContainer />
        <Row>
          <Col xl="6">
            <Card>
              <CardBody>
                <AvForm className="needs-validation" onSubmit={onSubmit}>
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          className="form-control"
                          type="text"
                          name="vehicleNumber"
                          placeholder="Vehicle Number"
                          errorMessage=" Enter Vehicle Number."
                          onChange={inputHandle}
                          value={tracking.vehicleNumber}
                          // value={id}
                          validate={{ required: { value: false } }}
                          id="validationCustom03"
                          disabled
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          className="form-control"
                          type="text"
                          name="vehicleNumber"
                          placeholder="Vehicle Number"
                          errorMessage=" Enter Vehicle Number."
                          onChange={inputHandle}
                          value={tracking.locations}
                          validate={{ required: { value: false } }}
                          id="validationCustom03"
                          disabled
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <div className="mb-3">
                        <AvField
                          className="form-control"
                          type="text"
                          name="manifestNUmbers"
                          placeholder="Manifests Numbers (Separated BY ',' Like CHM1, CHM2, CHM3)"
                          errorMessage=" Enter Receiver Mobile."
                          onChange={inputHandle}
                          value={tracking.manifestNUmbers}
                          validate={{ required: { value: true } }}
                          id="validationCustom03"
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="button-items">
                    <Button color="primary" type="submit">
                      {loader ? "Loading..." : "save"}
                    </Button>
                  </div>
                </AvForm>
              </CardBody>
            </Card>
          </Col>

          {/* <Col xl="6">
            <LatestBooking />
          </Col> */}
        </Row>
      </div>
    </>
  );
};

export default UpdateTracking;
