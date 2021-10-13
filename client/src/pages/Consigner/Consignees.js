import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Input, Label, Card, Table } from "reactstrap";
import { getAllConsignees } from "../../store/actions/consigneeAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import TopBar
import Toolbar from "../../components/Common/Toolbar";
import Pagination from "../../components/Common/Pagination";
import { checkPagination } from "../../store/reducers/paginationReducer";

const Consignees = () => {
  const dispatch = useDispatch();
  const { consignees } = useSelector((state) => state.consignees);
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
    dispatch(getAllConsignees(search));
  }, [dispatch, search]);

  const data = consignees.response;

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
                        <th>Company Code</th>
                        <th>Company Name</th>
                        <th>Phone</th>
                        <th>GST Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data !== undefined &&
                        data
                          .slice(pagination.start, pagination.end)
                          .map((value, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <Input type="checkbox" id="chk19" />
                                  <Label htmlFor="chk19" className="toggle" />
                                </td>
                                <td>
                                  <Link
                                    to={`/consignee/${value._id}`}
                                    className="title"
                                  >
                                    {value.consigneeCode}
                                  </Link>
                                </td>
                                <td>{value.companyName}</td>
                                <td>{value.phone}</td>
                                <td>{value.email}</td>
                                <td className="d-flex">
                                  <Link to={`booking-update/${value._id}`}>
                                    <i className="bx bx-edit-alt font-size-16 align-middle me-0" />
                                  </Link>
                                  <Link
                                    to={`print-docket/${value._id}`}
                                    className="text-danger"
                                  >
                                    <i className="bx bx-trash-alt font-size-16 align-middle me-0 " />
                                  </Link>
                                </td>
                              </tr>
                            );
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

export default Consignees;
