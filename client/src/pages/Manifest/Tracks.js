import { useState,useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Label, Card, Table } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllTrackings } from "../../store/actions/trackingAction";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Email TopBar
import Toolbar from "../../components/Common/Toolbar";
import Loader from "../../components/HorizontalLayout/Loader";
import Pagination from "../../components/Common/Pagination";

const Tracks = () => {
  const dispatch = useDispatch();
  const { trackings, loader } = useSelector((state) => state.trackings);  
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
    setSearch(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllTrackings(search));
  }, [dispatch, search]);

  const data = trackings.response;
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
                <Toolbar inputHandle={inputHandle}/>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Vehicle Number</th>
                        <th>Driver Name</th>
                        <th>Update</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loader ? (
                        data !== undefined &&
                        data
                          .slice(pagination.start, pagination.end)
                          .map((value, index) => {
                          const { _id, driverName, vehicleNumber } = value;
                          return (
                            <tr key={index}>  
                              <td>
                                <Input type="checkbox" id="chk19" />
                                <Label htmlFor="chk19" className="toggle" />
                              </td>
                              <td>
                                <Link
                                  to={`tracking/${vehicleNumber}`}
                                  className="title"
                                >
                                  {vehicleNumber}
                                </Link>
                              </td>
                              <td>{driverName}</td>
                              <td className="d-flex">
                                <Link to={`tracking-update/${_id}/${vehicleNumber}`}>
                                  <i className="bx bx-edit-alt font-size-16 align-middle me-0" /> 
                                </Link>
                                {/* <Link
                                  to={`print-docket/${value._id}`}
                                  className="text-danger"
                                >
                                  <i className="bx bx-printer font-size-16 align-middle me-0 " />
                                </Link> */}
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <Loader />
                      )}
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

export default Tracks;
