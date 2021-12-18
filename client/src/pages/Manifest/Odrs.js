import { useState,useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Label, Card, Table } from "reactstrap"; 
import { getAllOdrs } from "../../store/actions/odrAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Email TopBar
import Toolbar from "../../components/Common/Toolbar";
import Loader from "../../components/HorizontalLayout/Loader";
import Pagination from "../../components/Common/Pagination";


const Manifests = () => {
  const dispatch = useDispatch();
  const { odrs, loader } = useSelector((state) => state.odrs);
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
    dispatch(getAllOdrs(search));
  }, [dispatch, search]);

  const data = odrs.response;

  console.log(data)

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
                <Toolbar inputHandle={inputHandle}/>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>ODR No.</th>
                        <th>Delivery Boy Name</th>
                        <th>Delivery Area</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loader?data !== undefined &&
                        data
                          .slice(pagination.start, pagination.end)
                          .map((value, index) => {
                          const {
                            odrNumber,
                            deliveryBoy,
                            odrDestination,
                            date
                          } = value;
                          return (
                            <tr key={index}>
                              <td>
                                <Input type="checkbox" id="chk19" />
                                <Label htmlFor="chk19" className="toggle" />
                              </td>
                              <td>
                                <Link to={`odr/${value._id}`} className="title">
                                  {odrNumber}
                                </Link>
                              </td>
                              <td>{deliveryBoy}</td>
                              <td>{odrDestination}</td>
                              <td>{date}</td>
                            </tr>
                          );
                        }):<Loader/>}
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

export default Manifests;
