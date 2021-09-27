import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Label, Card, Table } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllTrackings } from "../../store/actions/trackingAction";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Email TopBar
import Toolbar from "../../components/Common/Toolbar";
import Loader from "../../components/HorizontalLayout/Loader";


const Tracks = () => {
  const dispatch = useDispatch();
  const { trackings, loader } = useSelector((state) => state.trackings);

  useEffect(() => {
    dispatch(getAllTrackings());
  }, [dispatch]);

  const data = trackings.data;
  // console.log(data)

  return (
    <>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Trackings" breadcrumbItem="Trackings List" />

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
                        <th>Vehicle Number</th>
                        <th>Driver Name</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loader?data !== undefined &&
                        data.response.map((value, index) => {
                          const {
                            _id,
                            driverName,
                            vehicleNumber,
                          } = value;
                          return (
                            <tr>
                              <td>
                                <Input type="checkbox" id="chk19" />
                                <Label htmlFor="chk19" className="toggle" />
                              </td>
                              <td>
                                <Link to={`tracking-update/${_id}/${vehicleNumber}`} className="title">
                                  {vehicleNumber}
                                </Link>
                              </td>
                              <td>{driverName}</td>
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

export default Tracks;
