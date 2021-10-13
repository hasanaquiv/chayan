import { useState,useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Label, Card, Table } from "reactstrap";
import { getAllBillings } from "../../store/actions/billingAction";
import { useSelector, useDispatch } from "react-redux";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import Loader from "../../components/HorizontalLayout/Loader";

//Import Email Topbar
import Toolbar from "../../components/Common/Toolbar";
import Pagination from "../../components/Common/Pagination";

const Billings = () => {
  const dispatch = useDispatch();
  const { billings, loader } = useSelector((state) => state.billings);
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
    dispatch(getAllBillings(search));
  }, [dispatch, search]);

  const data = billings.response;
  // console.log(data)

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
                        <th>Number's Bill</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loader ? (
                        data !== undefined &&
                        data.map((value, index) => {
                          return (
                            <tr key={index}>
                            <td>{index+1}</td>
                              <td>
                                <Link
                                  to={`/billing/${value._id.consigner}`}
                                  className="title"
                                >
                                  {value._id.consigner}
                                </Link>
                              </td>
                              <td>{value._id.consignerName}</td>
                              <td>{value.count}</td>
                              <td>{months[value._id.month]}</td>
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

export default Billings;
