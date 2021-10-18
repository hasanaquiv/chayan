import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Input, Label, Card, Table, Col } from "reactstrap";
import { getAllPods } from "../../store/actions/podAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Email Topbar
import Toolbar from "../../components/Common/Toolbar";
import Pagination from "../../components/Common/Pagination";
import Loader from "../../components/HorizontalLayout/Loader";

const PODS = () => {
  const dispatch = useDispatch();
  const { pods, loader } = useSelector((state) => state.pods);
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
    dispatch(getAllPods(search));
  }, [dispatch, search]);

  const data = pods.response;

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
                <Toolbar inputHandle={inputHandle} />
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Docket No.</th>
                        <th>Company Name</th>
                        <th>Status</th>
                        <th>Delivered By</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loader ? (
                        data !== undefined &&
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
                                <Link to={index} className="title">
                                  {value.docketNumber}
                                </Link>
                              </td>
                              <td>{value.name}</td>
                              <td>{value.status}</td>
                              <td>{value.receiverName}</td>
                              <td>{value.createdAt}</td>
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

export default PODS;
