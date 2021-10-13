import { useState,useEffect} from "react";

import { Link } from "react-router-dom";
import { Row, Col, Input, Label, Card, Table } from "reactstrap";
import { getAllBookings } from "../../store/actions/bookingAction";
import { useSelector, useDispatch } from "react-redux";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import Loader from "../../components/HorizontalLayout/Loader";


 
//Import Email Topbar
import Toolbar from "../../components/Common/Toolbar"; 
import Pagination from "../../components/Common/Pagination";

const Bookings = () => {
  
  const dispatch = useDispatch();
  const { bookings, loader } = useSelector((state) => state.bookings);
  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const [search, setSearch] = useState();

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const inputHandle = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllBookings(search));
  }, [dispatch, search]);

  const data = bookings.response;

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
                <Toolbar inputHandle={inputHandle} />
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Docket No.</th>
                        <th>Company Code</th>
                        <th>Origan</th>
                        <th>Destination</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data !== undefined && data.map((value, index) => {
                      return (<tr key={index}>
                        <td>
                          <Input type="checkbox" id="chk19" />
                          <Label htmlFor="chk19" className="toggle" />
                        </td>
                        <td>
                          <Link to={`/print-docket/${value._id}`} className="title">
                            {value.docketNumber}
                          </Link>
                        </td>
                        <td>{value.consigner}</td>
                        <td>{value.origin}</td>
                        <td>{value.destination}</td>
                        <td>{value.date}</td>
                      </tr>)
                    })}
                    </tbody>
                  </Table>
                </div>
              </Card>
              <Row>
                <Col xs="7">{`Showing ${pagination.start} - ${
                  pagination.end
                } of ${data !== undefined && data.length}`}</Col>
                <Col xs="5">
                  <Pagination
                    showPerPage={showPerPage}
                    onPaginationChange={onPaginationChange}
                    total={data}
                  />
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
