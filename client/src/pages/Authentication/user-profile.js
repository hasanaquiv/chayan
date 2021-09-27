import { useEffect } from "react";

import Loader from "../../components/HorizontalLayout/Loader";

import jwt_decode from "jwt-decode";

import { Row, Col, Card, CardBody, Button } from "reactstrap";

import { useSelector, useDispatch } from "react-redux";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";
import { getUser } from "../../store/actions/profileAction";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/avatar-1.jpg";
// actions

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const { user, loader } = useSelector((state) => state.profile);
  const { username } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username]);

  // console.log(user.name,"profile")

  return (
    <>
      <div className="page-content">
        {/* Render Breadcrumb */}
        <Breadcrumb title="Home" breadcrumbItem="Profile" />
        {!loader?
        <>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <div className="d-flex">
                  <div className="ms-3">
                    <img
                      src={avatar}
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 align-self-center">
                    <div className="text-muted">
                      <h5>{user.name}</h5>
                      <p className="mb-1">{"email"}</p>
                      <p className="mb-0">Id no: #{"idx"}</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <h4 className="card-title mb-4">Change User Name</h4>

        <Card>
          <CardBody>
            <AvForm className="form-horizontal">
              <div className="form-group">
                <AvField
                  name="username"
                  label="User Name"
                  value={"name"}
                  className="form-control"
                  placeholder="Enter User Name"
                  type="text"
                  required
                />
                <AvField name="idx" value={"idx"} type="hidden" />
              </div>
              <div className="text-center mt-4">
                <Button type="submit" color="danger">
                  Edit User Name
                </Button>
              </div>
            </AvForm>
          </CardBody>
        </Card>
        </>
        :<Loader/>}
      </div>
    </>
  );
};

export default UserProfile;
