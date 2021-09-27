import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Label, Card, Table } from "reactstrap";
import { getAllManifests } from "../../store/actions/manifestAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Email TopBar
import Toolbar from "../../components/Common/Toolbar";
import Loader from "../../components/HorizontalLayout/Loader";


const Manifests = () => {
  const dispatch = useDispatch();
  const { manifests, loader } = useSelector((state) => state.manifests);

  useEffect(() => {
    dispatch(getAllManifests());
  }, [dispatch]);

  const data = manifests.response;

  return (
    <>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Manifest" breadcrumbItem="Manifests List" />

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
                        <th>Manifest No.</th>
                        <th>Manifest Origin</th>
                        <th>Manifest Destination</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loader?data !== undefined &&
                        data.map((value, index) => {
                          const {
                            manifestNumber,
                            manifestOrigin,
                            manifestDestination,
                          } = value;
                          return (
                            <tr>
                              <td>
                                <Input type="checkbox" id="chk19" />
                                <Label htmlFor="chk19" className="toggle" />
                              </td>
                              <td>
                                <Link to="#" className="title">
                                  {manifestNumber}
                                </Link>
                              </td>
                              <td>{manifestOrigin}</td>
                              <td>{manifestDestination}</td>
                              <td>23 Aug</td>
                            </tr>
                          );
                        }):<Loader/>}
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

export default Manifests;
