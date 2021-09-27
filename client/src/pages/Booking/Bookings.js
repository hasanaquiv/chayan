import { useEffect} from "react";

import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Label, Card, Table } from "reactstrap";
import { getAllBookings } from "../../store/actions/bookingAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import Loader from "../../components/HorizontalLayout/Loader";


 
//Import Email Topbar
import Toolbar from "../../components/Common/Toolbar";

const Bookings = () => {

  
  const dispatch = useDispatch();
  const { bookings, loader } = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getAllBookings(getAllBookings));
  }, [dispatch]);

  const data = bookings.response;

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
                        <th>Docket No.</th>
                        <th>Company Name</th>
                        <th>Origan</th>
                        <th>Destination</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                    {!loader ? data !== undefined && data.map((value, index) => {
                      return (<tr>
                        <td>
                          <Input type="checkbox" id="chk19" />
                          <Label htmlFor="chk19" className="toggle" />
                        </td>
                        <td>
                          <Link to={`/print-docket/${value._id}`} className="title">
                            {value.docketNumber}
                          </Link>
                        </td>
                        <td>Samsung</td>
                        <td>New Delhi</td>
                        <td>Chennai</td>
                        <td>23 Aug</td>
                      </tr>)
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

export default Bookings;
