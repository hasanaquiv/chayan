import { useEffect } from "react";
import { Row, Col, Container } from "reactstrap";

// Redux
import { Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";
import {useSelector, useDispatch} from "react-redux";

import {passwordChange} from "../../store/actions/loginAction";


const Password = (props) => {

const {passwordSave, username} = useSelector((state) => state.users)
const dispatch = useDispatch();

  const onSubmit = (event, value) => {
    event.preventDefault();
    if(value.password === value.confirmPassword){
        dispatch(passwordChange(value));
    } else {
        alert("Password Not Match")
    }
  };

  console.log(passwordSave)

  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="card-body pt-5">
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={onSubmit}
                    >
                      <AvField
                          name="id"
                          type="hidden"
                          value={username._id}
                        />
                      <div className="mb-3">
                        <AvField
                          name="password"
                          className="form-control"
                          placeholder="Enter Password"
                          type="password"
                          errorMessage="Please provide Consignee Details."
                          value=""
                          validate={{ required: { value: true } }}
                          id="validationCustom04"
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="confirmPassword"
                          className="form-control"
                          placeholder="Enter Password Again"
                          type="password"
                          errorMessage="Please provide Consignee Details."
                          value=""
                          validate={{ required: { value: true } }}
                          id="validationCustom04"
                        />
                      </div>
                      <Row className="row mb-0">
                        <Col className="col-12 text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Change
                          </button>
                        </Col>
                      </Row>
                    </AvForm>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Password;
