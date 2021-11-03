import { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { getPod } from "../../store/actions/podAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Email Topbar
import Loader from "../../components/HorizontalLayout/Loader";

const PODS = (props) => {
  const dispatch = useDispatch();
  const { pod, loader } = useSelector((state) => state.pods);
  const pathname = props.location.pathname;
  const id = pathname.substr(5);

  useEffect(() => {
    dispatch(getPod(id));
  }, [dispatch, id]);
  console.log(loader)
  console.log(pod.podFile)

  return (
    <>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Trackings" breadcrumbItem="Trackings List" />
        <Row>
          <Col xs="12">
            <div className="mb-3">
              <Card>
                <CardBody>
                  {!loader ? pod.podFile !== undefined && (
                    <>
                      <Row>
                        <Col xs="6">
                          <Alert className=".alert-success">
                            Docket Number:{" "}
                            <strong>{pod.docketNumber}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Receiver Name : <strong>{pod.receiverName}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Receiver Mobile :{" "}
                            <strong>{pod.receiverMobile}</strong>
                          </Alert>
                          <Alert className=".alert-success">
                            Status : <strong>{pod.status}</strong>
                          </Alert>
                        </Col> 
                        <Col xs="6">                            
                          <Alert className=".alert-success">
                            <img src={require(`../../uploads/${pod.podFile}`).default} alt="pod-file" width="300px"/>
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

export default PODS;
