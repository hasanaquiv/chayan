import { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { adminAction } from "../../store/actions/adminAction";

const Admin = () => {
  //for change tooltip display properly

  const dispatch = useDispatch();
  const { loader, response } = useSelector((state) => state.admin);

  const [admin, setAdmin] = useState({
    name: "",
    location: "",
    username: "",
    role:"",
    password: "",
    confirmPassword: "",
  });

  const inputHandle = (event) => {
    const { name, value } = event.target;

    setAdmin((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (admin.password !== admin.confirmPassword) {
      alert("Password Not Match");
    } else {
      dispatch(adminAction(admin));
    }
  };

  useEffect(() =>{
    if(response){
      toast.success(response.msg);
    }
    setAdmin({
      name: "",
      location: "",
      username: "",
      role:"",
      password: "",
      confirmPassword: "",
    })
  },[dispatch, response])

  // console.log(response)

  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="Admin" breadcrumbItem="Add Admin" />
        <Row>
        <ToastContainer />
          <Col xl="8">
            <Card>
              <CardBody>
                <AvForm className="needs-validation" onValidSubmit={onSubmit}>
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="name"
                          placeholder="Name"
                          type="text"
                          errorMessage="Enter Name"
                          className="form-control"
                          onChange={inputHandle}
                          value={admin.name}
                          validate={{ required: { value: true } }}
                          id="validationCustom01"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="location"
                          placeholder="Location"
                          type="text"
                          errorMessage="Enter Location Name"
                          className="form-control"
                          onChange={inputHandle}
                          value={admin.location}
                          validate={{ required: { value: true } }}
                          id="validationCustom02"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="username"
                          placeholder="User Name should be unique"
                          type="text"
                          errorMessage="Enter User Name"
                          className="form-control"
                          onChange={inputHandle}
                          value={admin.username}
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
                          name="role"
                          placeholder="Role"
                          errorMessage=" Please Select Role."
                          onChange={inputHandle}
                          value={admin.role}
                          validate={{ required: { value: true } }}
                          id="validationCustom03"
                        >
                          <option>Select Role</option>
                          <option value="1">Sub Admin</option>
                          <option value="2">POD Admin</option>
                          <option value="3">BIlling Admin</option>
                        </AvField>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="password"
                          placeholder="Password"
                          type="password"
                          errorMessage=" Enter Password."
                          className="form-control"
                          onChange={inputHandle}
                          value={admin.password}
                          validate={{ required: { value: true } }}
                          id="validationCustom03"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="mb-3">
                        <AvField
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          type="password"
                          errorMessage="Password Not matched"
                          className="form-control"
                          onChange={inputHandle}
                          value={admin.confirmPassword}
                          validate={{ required: { value: true } }}
                          id="validationCustom04"
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="button-items">
                    <Button color="primary" type="submit">
                      {!loader?"Add":"Loading..."}
                    </Button>
                  </div>
                </AvForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Admin;
