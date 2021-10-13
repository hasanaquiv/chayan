import { useEffect } from "react";

import Loader from "../../components/HorizontalLayout/Loader";

import { Link } from "react-router-dom";
import { getAllUser } from "../../store/actions/profileAction";
import { useSelector, useDispatch } from "react-redux";

import { Card, CardBody, Col, Table } from "reactstrap";

const Overview = () => {
  const dispatch = useDispatch();
  const { users, loader, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  // console.log(users);

  return (
    <>
      <Col lg={12}>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Inbox</h4>

            <ul className="inbox-wid list-unstyled">
              <div className="table-responsive">
                <Table className="table-centered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Location</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!loader ? (
                      users.map((user, key) => (
                        <tr key={key}>
                          <td>
                            <Link to="">{user.name}</Link>
                          </td>
                          <td>{user.username}</td>
                          <td>{user.location}</td>
                          <td>{user.role}</td>
                        </tr>
                      ))
                    ) : (
                      <Loader />
                    )}
                  </tbody>
                </Table>
              </div>
            </ul>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Overview;
