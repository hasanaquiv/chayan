import { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { odrAction } from "../../store/actions/odrAction";

const AddOdr = () => {
  //for change tooltip display properly
  const dispatch = useDispatch();
  const { response, loader, error } = useSelector((state) => state.odrs);
  const [odr, setodr] = useState({
    deliveryBoy: "",
    odrDestination: "",
    docketNUmbers: "",
  });

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setodr((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(odrAction(odr));
  };

  useEffect(() => {
    if (response) {
      toast.success(response.msg);
    }
    setodr({
      deliveryBoy: "",
      odrDestination: "",
      docketNUmbers: "",
    });
  }, [response]);

  console.log(response);
  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="odr" breadcrumbItem="New Add odr" />
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
                          name="deliveryBoy"
                          placeholder="Delivery Boy Name"
                          type="text"
                          errorMessage="Delivery Boy Name"
                          className="form-control"
                          onChange={inputHandle}
                          value={odr.deliveryBoy}
                          validate={{ required: { value: true } }}
                          id="validationCustom01"
                        />
                      </div>
                    </Col>

                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="odrDestination"
                          placeholder="Delivery Area"
                          type="text"
                          errorMessage="Enter Delivery Area"
                          className="form-control"
                          onChange={inputHandle}
                          value={odr.odrDestination}
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
                          value={odr.docketNUmbers}
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

export default AddOdr;
