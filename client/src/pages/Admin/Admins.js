import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Label, Card, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";

//Import TopBar
import Toolbar from "../../components/Common/Toolbar";
import { getAllUser } from "../../store/actions/profileAction";
import Loader from "../../components/HorizontalLayout/Loader";

const Shippers = () => {
  const dispatch = useDispatch();
  const { users, loader, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Booking" breadcrumbItem="View All" />

        <Row>
          <Col xs="12">
            {/* Render Email SideBar */}
            {/* <EmailSideBar /> */}
            <div className="mb-3">
              <Card>
                {/* Render Email Top Tool Bar */}
                <Toolbar />
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Location</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loader ? (
                        users.map((user, key) => (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>
                              <Link to="">{user.name}</Link>
                            </td>
                            <td>{user.username}</td>
                            <td>{user.location}</td>
                            <td>
                              {(() => {
                                switch (user.role) {
                                  case 0:
                                    return <>Admin</>;
                                  case 1:
                                    return <>Sub Admin</>;
                                  case 2:
                                    return <>POD Admin</>;
                                  case 3:
                                    return <>Billing Admin</>;
                                  default:
                                    return <div>You are a User.</div>;
                                }
                              })()}
                            </td>
                            <td className="d-flex">
                              <Link to={`booking-update/${user._id}`}>
                                <i className="bx bx-edit-alt font-size-16 align-middle me-0" />
                              </Link>
                              <Link
                                to={`print-docket/${user._id}`}
                                className="text-danger"
                              >
                                <i className="bx bx-trash-alt font-size-16 align-middle me-0 " />
                              </Link>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <Loader />
                      )}
                    </tbody>
                  </Table>
                </div>
              </Card>
              <Row>
                <Col xs="7">Showing 1 - 10 of 1,524</Col>
                <Col xs="5">
                  <div className="btn-group float-end">
                    <Button
                      type="button"
                      color="success"
                      size="sm"
                      className="waves-effect"
                    >
                      <i className="fa fa-chevron-left" />
                    </Button>
                    <Button
                      type="button"
                      color="success"
                      size="sm"
                      className="waves-effect"
                    >
                      <i className="fa fa-chevron-right" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Shippers;
