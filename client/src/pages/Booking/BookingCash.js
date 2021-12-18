import { useState, useEffect } from "react";

import { Row, Col} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
// import LatestBooking from "../Dashboard/LatestBooking";
import { bookingCashAction } from "../../store/actions/bookingActionCash";
import BookingComp from "./BookingCompCash";

const Booking = (props) => {
  //for change tooltip display properly
  const [add, setAdd] = useState("");
  const [consigneeValue, setConsigneeValue] = useState(0);
  const { username } = useSelector((state) => state.users);
  const { response } = useSelector((state) => state.bookingsCash);
  const dispatch = useDispatch();

  const callback = (count) => {
    setAdd(count);
  };

  const consigneeCallback = (consigneeDetails) => {
    setConsigneeValue(consigneeDetails);
  };

  let area = username.location;

  const onSubmit = (event, value) => {
    event.preventDefault();
    console.log(value);
    dispatch(bookingCashAction(value));
  };

  useEffect(() => {
    if (Object.keys(response).length > 0) {
      alert(response.msg);
      props.history.push(`/print-docket/${response.response._id}`);
      window.location.reload();
    }
  }, [add, area, consigneeValue, dispatch, props.history, response]);

  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="Booking" breadcrumbItem="New Booking" />
        <Row>
          <Col xl="12">
              <BookingComp 
                add={add}
                consigneeValue={consigneeValue}
                callback={callback}
                consigneeCallback={consigneeCallback}
                onSubmit={onSubmit}
                area={area}
              />
            </Col>
        </Row>
      </div>
    </>
  );
};

export default Booking;
