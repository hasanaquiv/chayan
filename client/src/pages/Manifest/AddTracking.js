import { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { trackingAction } from "../../store/actions/trackingAction";
 
const AddTracking = () => {
  //for change tooltip display properly
  const dispatch = useDispatch();
  const { response, loader } = useSelector((state) => state.trackings); 
  const { username } = useSelector((state) => state.users);
  const [tracking, setTracking] = useState({
    locations:"New Delhi",
    driverName: "",
    vehicleNumber: "",
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
    dispatch(trackingAction(tracking));
    setTracking({
      tracking:"",
    });
  };

  useEffect(() => {
    if (response) {
      toast.success(response.msg);
    }
  }, [response]);
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
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          className="form-control"
                          type="text"
                          name="locations"
                          placeholder="Driver Name"
                          errorMessage=" Enter Driver Name."
                          onChange={inputHandle}
                          value={tracking.locations}
                          validate={{ required: { value: false } }}
                          id="validationCustom03"
                          disabled
                        />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          className="form-control"
                          type="text"
                          name="driverName"
                          placeholder="Driver Name"
                          errorMessage=" Enter Driver Name."
                          onChange={inputHandle}
                          value={tracking.driverName}
                          validate={{ required: { value: true } }}
                          id="validationCustom03"
                        />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="mb-3">
                        <AvField
                          className="form-control"
                          type="text"
                          name="vehicleNumber"
                          placeholder="Vehicle Number"
                          errorMessage=" Enter Vehicle Number."
                          onChange={inputHandle}
                          value={tracking.vehicleNumber}
                          validate={{ required: { value: true } }}
                          id="validationCustom03"
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
                          placeholder="Manifests Numbers (Separated BY ',' Like Chlko-1, Chlko-2, Chlko-3)"
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

export default AddTracking;
