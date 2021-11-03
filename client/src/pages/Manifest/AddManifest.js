import { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { manifestAction } from "../../store/actions/manifestAction";

const AddManifest = () => {
  //for change tooltip display properly
  const dispatch = useDispatch();
  const { response, loader, error } = useSelector((state) => state.manifests);
  const [manifest, setManifest] = useState({
    manifestOrigin: "",
    manifestDestination: "",
    docketNUmbers: "",
  });

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setManifest((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(manifestAction(manifest));
  };

  useEffect(() => {
    if (response) {
      toast.success(response.msg);
    }
    setManifest({
      manifestOrigin: "",
      manifestDestination: "",
      driverName: "",
      vehicleNumber: "",
      docketNUmbers: "",
    });
  }, [response]);
  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="manifest" breadcrumbItem="New Add manifest" />
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
                          name="manifestOrigin"
                          placeholder="Manifest Origin"
                          type="text"
                          errorMessage="Enter Manifest Origin"
                          className="form-control"
                          onChange={inputHandle}
                          value={manifest.manifestOrigin}
                          validate={{ required: { value: true } }}
                          id="validationCustom01"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="manifestDestination"
                          placeholder="Receiver Manifest Destination"
                          type="text"
                          errorMessage="Enter Manifest Destination"
                          className="form-control"
                          onChange={inputHandle}
                          value={manifest.manifestDestination}
                          validate={{ required: { value: true } }} 
                          id="validationCustom02"
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
                          name="docketNUmbers"
                          placeholder="Docket Numbers (Separated BY ',' Like Chlko-1, Chlko-2, Chlko-3)"
                          errorMessage=" Enter Receiver Mobile."
                          onChange={inputHandle}
                          value={manifest.docketNUmbers}
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

export default AddManifest;
