import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, Alert } from "reactstrap"; 
import { getManifest } from "../../store/actions/manifestAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import Loader from "../../components/HorizontalLayout/Loader";

const Manifest = (props) => {
  const dispatch = useDispatch();
  const { manifest, loader } = useSelector((state) => state.manifests);
  const pathname = props.location.pathname;
  const id = pathname.substr(10);

  useEffect(() => {
    dispatch(getManifest(id));
  }, [dispatch, id]);
  console.log(manifest);

  return (
    <>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Booking" breadcrumbItem="manifest" />

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
                            Manifest Number :{" "}
                            <strong>{manifest.manifestNumber}</strong>
                          </Alert>
                        </Col>
                        <Col xs="4">
                          <Alert className=".alert-success">
                            Manifest Origin : <strong>{manifest.manifestOrigin}</strong>
                          </Alert>
                        </Col>
                        <Col xs="4">
                          <Alert className=".alert-success">
                            Manifest Destination :{" "}
                            <strong>{manifest.manifestDestination}</strong>
                          </Alert>
                        </Col>
                        <Col xs="12">
                          <Alert className=".alert-success"> 
                          Docket Number :{" "}
                            <strong>
                            {manifest !== undefined && manifest.docketNUmbers.map((value, index) =>{
                                    return value.docketNUmber+","
                            })}
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

export default Manifest;
