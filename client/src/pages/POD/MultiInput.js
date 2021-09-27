import React from 'react'
import { Row, Col } from "reactstrap";
import { AvField } from "availity-reactstrap-validation";

const MultiInput = () => {
    return (
        <>
            <Row>
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
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  
        </>
    )
}

export default MultiInput
