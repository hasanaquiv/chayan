import { useEffect } from "react";
import {
  Card,
  CardBody,
  Table,
  CardTitle,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { getAllBookings } from "../../store/actions/bookingAction";
import { useSelector, useDispatch } from "react-redux";

const LatestBooking = () => {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getAllBookings(getAllBookings));
  }, [dispatch]);

  const data = bookings.response;

  console.log(data);

  return (
    <Col lg={12}>
      <Card>
        <CardBody>
          <CardTitle className="h4 mb-4">Latest Transaction</CardTitle>
          <div className="table-responsive">
            <Table className="table-centered">
              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>Docket No.</th>
                  <th>Company Name</th>
                  <th>Consignee</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data !== undefined &&
                  data.map((value, index) => {
                    return (
                      <tr>
                        <td>
                          <Link to={value._id} className="text-body fw-medium">
                            {value.docketNumber}
                          </Link>
                        </td>
                        <td>{value.consigner}</td>
                        <td>{value.consignee}</td>
                        <td className="d-flex">
                          <Link to={`booking-update/${value._id}`}><i className="bx bx-edit-alt font-size-16 align-middle me-0"/></Link>
                          <Link to={`print-docket/${value._id}`} className="text-danger"><i className="bx bx-printer font-size-16 align-middle me-0 "/></Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestBooking;
