import { useState, useEffect } from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";

import BookingModel from "./BookingModel";
import VolumetricModel from "./VolumetricModel";
// import InputField from "./InputField";

import "react-toastify/dist/ReactToastify.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
// import LatestBooking from "../Dashboard/LatestBooking";
import { bookingAction } from "../../store/actions/bookingAction";
import { getAllConsigners } from "../../store/actions/consignerAction";
import BookingComp from "./BookingComp";

const Booking = (props) => {
  //for change tooltip display properly
  const [add, setAdd] = useState("");
  const [consigneeValue, setConsigneeValue] = useState(0);
  const [consignerVol, setConsignerVol] = useState("CHC6");
  const { username } = useSelector((state) => state.users);
  const { loader, response } = useSelector((state) => state.bookings);
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
    // console.log(value)
    dispatch(bookingAction(value));
  };

  useEffect(() => {
    if (Object.keys(response).length > 0) {
      alert(response.msg);
      props.history.push(`/print-docket/${response.response._id}`);
      window.location.reload();
    }
  }, [add, area, consigneeValue, consignerVol, dispatch, props.history, response]);

  // console.log(compareAdd)

  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="Booking" breadcrumbItem="New Booking" />
        <Row>
          <Col xl="12">
            <ToastContainer />
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
