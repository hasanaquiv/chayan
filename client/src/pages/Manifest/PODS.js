import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Row, Input, Label, Card, Table } from "reactstrap";
import { getAllPods } from "../../store/actions/podAction";
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"; 

//Import Email Topbar
import Toolbar from "../../components/Common/Toolbar";

const PODS = () => {
  const dispatch = useDispatch();
  const { pods } = useSelector((state) => state.pods);

  useEffect(() => {
    dispatch(getAllPods(getAllPods));
  }, [dispatch]);

  const data = pods.response;

  return (
    <>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Manifest" breadcrumbItem="PODS List" />
        <Row>
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
                    <th>Status</th>
                    <th>Delivered By</th>
                    <th>Date</th>
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
                              {value.docketNumber}
                            </Link>
                          </td>
                          <td>{value.name}</td>
                          <td>{value.status}</td>
                          <td>{value.receiverName}</td>
                          <td>{value.createdAt}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </Card>
        </Row>
      </div>
    </>
  );
};

export default PODS;
