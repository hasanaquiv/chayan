import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Label, Card, Table } from "reactstrap";
import { getAllConsigners } from "../../store/actions/consignerAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import TopBar
import Toolbar from "../../components/Common/Toolbar";

const Shippers = () => {
  const dispatch = useDispatch();
  const { consigners } = useSelector((state) => state.consigners);

  useEffect(() => {
    dispatch(getAllConsigners());
  }, [dispatch]);

  const data = consigners.response;

  console.log(data);

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
                        <th>Company Code</th>
                        <th>Company Name</th>
                        <th>Phone</th>
                        <th>GST Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data !== undefined &&
                        data.map((value, index) => {
                          return (
                            <tr>
                              <td>
                                <Input type="checkbox" id="chk19" />
                                <Label htmlFor="chk19" className="toggle" />
                              </td>
                              <td>
                                <Link to={index} className="title">
                                  {value.consignerCode}
                                </Link>
                              </td>
                              <td>{value.companyName}</td>
                              <td>{value.phone}</td>
                              <td>{value.gstNumber}</td>
                            </tr>
                          );
                        })}
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
