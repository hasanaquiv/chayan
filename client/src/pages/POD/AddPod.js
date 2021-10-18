import { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { podAction } from "../../store/actions/podAction";

const AddPod = () => {
  //for change tooltip display properly
  const dispatch = useDispatch();
  const { response, loader, error } = useSelector((state) => state.pods);
  const [pod, setPod] = useState({
    docketNumber: "",
    receiverName: "",
    receiverMobile: "",
    file: "",
    status: "",
  });
  const [a, setA] = useState()

  const [add, setAdd] = useState(0);

  const inputHandle = (event) => {
    const { name, value } = event.target;
    if (value === "receiverUnavailable") {
      setAdd(0);
    } else {
      setAdd(1);
    }
    setPod((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const inputHandleFile = (event) => {
    setPod((preValue) => {
      return {
        ...preValue,
        file: event.target.files[0],
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("podFile", pod.file,pod.file.name);
    formData.append("docketNumber", pod.docketNumber)
    formData.append("receiverName", pod.receiverName)
    formData.append("receiverMobile", pod.receiverMobile)
    formData.append("status", pod.status)
    dispatch(podAction(formData));
  };

  useEffect(() => {
    if (response) {
      toast.success(response.msg);
    }
    setPod({
      docketNumber: "",
      receiverName: "",
      receiverMobile: "",
      status: "",
    });
  }, [response]);

  // console.log(pod.file, "files");
  // console.log(pod),""

  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="POD" breadcrumbItem="New Add POD" />
        <ToastContainer />
        <Row>
          <Col xl="6">
            <Card>
              <CardBody>
                <AvForm className="needs-validation" onSubmit={onSubmit}>
                  {add === 1 ? (
                    <Row>
                      <Col md="6">
                        <div className="mb-3">
                          <AvField
                            name="docketNumber"
                            placeholder="Docket Number"
                            type="text"
                            errorMessage="Enter Docket Number"
                            className="form-control"
                            onChange={inputHandle}
                            value={pod.docketNumber}
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <AvField
                            className="form-control"
                            type="select"
                            name="status"
                            placeholder="Receiver Mobile"
                            errorMessage=" Enter Receiver Mobile."
                            onChange={inputHandle}
                            value={pod.status}
                            validate={{ required: { value: true } }}
                            id="validationCustom03"
                          >
                            <option>Select Status</option>
                            <option value="delivered">Delivered</option>
                            <option value="receiverUnavailable">
                              Receiver Unavailable
                            </option>
                          </AvField>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <AvField
                            name="receiverName"
                            placeholder="Receiver Name"
                            type="text"
                            errorMessage="Enter Receiver Name"
                            className="form-control"
                            onChange={inputHandle}
                            value={pod.receiverName}
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <AvField
                            className="form-control"
                            type="number"
                            name="receiverMobile"
                            placeholder="Receiver Mobile"
                            errorMessage=" Enter Receiver Mobile."
                            onChange={inputHandle}
                            value={pod.receiverMobile}
                            validate={{ required: { value: true } }}
                            id="validationCustom03"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <div className="input-group">
                            <input
                              type="file"
                              className="form-control"
                              id="inputGroupFile02"
                              name="podFile"
                              onChange={inputHandleFile}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    <>
                      <Col md="6">
                        <div className="mb-3">
                          <AvField
                            name="docketNumber"
                            placeholder="Docket Number"
                            type="text"
                            errorMessage="Enter Docket Number"
                            className="form-control"
                            onChange={inputHandle}
                            value={pod.docketNumber}
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3">
                          <AvField
                            className="form-control"
                            type="select"
                            name="status"
                            placeholder="Receiver Mobile"
                            errorMessage=" Enter Receiver Mobile."
                            onChange={inputHandle}
                            value={pod.status}
                            validate={{ required: { value: true } }}
                            id="validationCustom03"
                          >
                            <option>Select Status</option>
                            <option value="delivered">Delivered</option>
                            <option value="receiverUnavailable">
                              Receiver Unavailable
                            </option>
                          </AvField>
                        </div>
                      </Col>
                    </>
                  )}
                  <div className="button-items">
                    <Button color="primary" type="submit">
                      {loader ? "Loading..." : "save"}
                    </Button>
                  </div>
                </AvForm>
              </CardBody>
            </Card>
          </Col>

          <Col xl="6">
            {/* <form onSubmit={onSave}>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
                name="podFile"
                onChange={(event) =>{ setA(event.target.files[0])}}
              />
              <Button color="primary" type="submit">
                      save
                    </Button>
            </form> */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddPod;
