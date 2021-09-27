import React, { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from "axios";
import Select from "react-select";

import Checkbox from "./Checkbox";
import { Catalogues } from "./mock";
import EnhancedTable from "./EnhancedTable";
import VolumetricModel from "./VolumetricModel";

const Test = () => {
  const [value, setValue] = useState();

  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];

  const callback = (event,value) => {
    console.log(value);
  };

  return (
    <div className="page-content">
      {/* <Breadcrumbs title="POD" breadcrumbItem="New Add POD" /> */}
      <Row>
        <Col xl="6">
          <Card>
            <CardBody>
              {/* <VolumetricModel parentCallback={callback} /> */}
              {/* <AvForm className="needs-validation" onSubmit={callback}> */}
              <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        callback(e, v);
                      }}
                    >
                <Row>
                  {/* <Col md="6">
                    <div className="mb-3">
                      <AvField
                        className="form-control"
                        type="select"
                        name="select"
                        placeholder="Receiver Mobile"
                        errorMessage=" Enter Receiver Mobile."
                        validate={{ required: { value: true } }}
                        id="validationCustom03"
                        onChange={handle}
                        // value={value.select}
                      >
                        <option>Select Status</option>
                        <option value="delivered">Delivered</option>
                        <option value="receiverUnavailable">
                          Receiver Unavailable
                        </option>
                      </AvField>
                    </div>
                  </Col> */}
                  <Col md="6">
                    <Select
                      className="form-control"
                      name="select2"
                      placeholder="Receiver Mobile"
                      errorMessage=" Enter Receiver Mobile."
                      validate={{ required: { value: true } }}
                      id="validationCustom03"
                      value={value}
                      options={options}
                    />
                  </Col>
                </Row>
                <div className="button-items">
                  <Button color="primary" type="submit">
                    {/* {loader ? "Loading..." : "save"}
                      Save */}
                    Save
                  </Button>
                </div>
              </AvForm>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Test;
