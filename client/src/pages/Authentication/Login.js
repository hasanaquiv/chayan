import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Alert, Container } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Redux
import { Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

import { loginAction } from "../../store/actions/loginAction";

// import images
import logo from "../../assets/images/icon.png";

const Login = (props) => {
  const dispatch = useDispatch();
  const { response, loader, error } = useSelector((state) => state.users);

  const [user, setUser] = useState({
    username: "",
    location: "",
    password: "",
  });

  const inputHandle = (event) =>{
    const {name,value} = event.target;
    setUser((preValue) =>{
        return{
          ...preValue,
          [name]: value
        }
    })
  }

  // handleValidSubmit
  const handleValidSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginAction(user));
  };

  useEffect(() => {
    if (response) {
      toast.error(response.msg);
    }
    if (response.token) {
      props.history.push("/dashboard");
    }
  }, [props.history, error, response.token, response.msg, response]);

  // console.log(response)

  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <ToastContainer />
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Welcome Back !</h5>
                    <p className="text-white-50 mb-0">
                      Sign in to continue to Chayan Logistics.
                    </p>
                    <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="65" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v);
                      }}
                    >
                      <div className="mb-3">
                        <AvField
                          name="username"
                          onChange={inputHandle}
                          value={user.username}
                          className="form-control"
                          placeholder="Enter username"
                          type="name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="location"
                          onChange={inputHandle}
                          value={user.location}
                          className="form-control"
                          placeholder="Enter Location"
                          type="name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          onChange={inputHandle}
                          value={user.password}
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          {!loader ? "Log in" : "Loading..."}
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1"></i> Forgot your
                          password?
                        </Link>
                      </div>
                    </AvForm>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>
                  Don't have an account ?{" "}
                  <Link to="/register" className="fw-medium text-primary">
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Chayan Logistics. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger"></i> by iHostweb
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
