import { useEffect } from "react";

import { Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer } from "react-toastify";
import Loader from "../../components/HorizontalLayout/Loader";

import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { getPrintInfo } from "../../store/actions/printAction";
import PrintData from "./PrintData";

const Booking = (props) => {
  // const { id } = useParams();
  //   const { consigners } = useSelector((state) => state.consigners);
  const { prints, loader } = useSelector((state) => state.prints); 
  const dispatch = useDispatch();

  let ids = props.location.pathname;
  const id = ids.substr(14);

  // const id = "613ef7c8d3c47e083202283e";
  // console.log(id);

  useEffect(() => {
    dispatch(getPrintInfo(id));
  }, [dispatch, id]);

  const data = prints.data;
  // console.log(data);
  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="Booking" breadcrumbItem="New Booking" />
        <Row>
          <Col xl="12">
            <ToastContainer />
            {!loader ? (
              data !== undefined && <PrintData data={data} id={id} />
            ) : (
              <Loader />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Booking;
