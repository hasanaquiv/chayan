import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { getConsigner } from "../../store/actions/consignerAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import TopBar
// import Toolbar from "../../components/Common/Toolbar";
import Loader from "../../components/HorizontalLayout/Loader";

const Shippers = (props) => {
  const dispatch = useDispatch();
  const { consigner, loader } = useSelector((state) => state.consigners);
  const pathname = props.location.pathname;
  const id = pathname.substr(11);

  useEffect(() => {
    dispatch(getConsigner(id));
  }, [dispatch, id]);
  console.log(consigner);

  return (
    <>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Booking" breadcrumbItem="Consigner" />

        <Row>
          <Col xs="12">
            {/* Render Email SideBar */}
            {/* <EmailSideBar /> */}
            <div className="mb-3">
              <Card>
                <CardBody>
                  {!loader ? (
                    <>
                      <Row>
                        <Col xs="4">
                          <Alert className=".alert-success">
                            Company Code :{" "}
                            <strong>{consigner.consignerCode}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Name : <strong>{consigner.name}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Company Name :{" "}
                            <strong>{consigner.companyName}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Phone : <strong>{consigner.phone}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            GST Number : <strong>{consigner.gstNumber}</strong>
                          </Alert>
                        </Col>
                        <Col xs="4">
                          <Alert className=".alert-success">
                            Customer Type :{" "}
                            <strong>{consigner.customerType}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Email : <strong>{consigner.email}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Location : <strong>{consigner.location}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Docket Charge :{" "}
                            <strong>{consigner.docketCharges}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Freight Charge :{" "}
                            <strong>{consigner.freightCharge}</strong>
                          </Alert>
                        </Col>
                        <Col xs="4">
                          <Alert className=".alert-success">
                            FOV Charge <strong>{consigner.fovCharges}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Fuel Charge <strong>{consigner.fuelCharges}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            ODA Charge : <strong>{consigner.odaCharges}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            To Pay Charge :{" "}
                            <strong>{consigner.toPayCharges}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Volumetric : <strong>{consigner.volumetric}</strong>
                          </Alert>
                        </Col>
                        <Col xs="12">
                          <Alert className=".alert-success">
                            Address :{" "}
                            <strong>
                              {consigner.address1} {consigner.address2}{" "}
                              {consigner.city} {consigner.state}{" "}
                              {consigner.pincode}
                            </strong>
                          </Alert>
                        </Col>
                      </Row>
                    </>
                  ) : (
                    <Loader />
                  )}
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Shippers;
