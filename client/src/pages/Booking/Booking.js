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
  const [compareAdd, setCompareAdd] = useState("");
  const [consigneeValue, setConsigneeValue] = useState(0);
  const [consignerVol, setConsignerVol] = useState("CHC6");
  const { username } = useSelector((state) => state.users);
  const { loader, response } = useSelector((state) => state.bookings);
  const { consigners } = useSelector((state) => state.consigners);
  const dispatch = useDispatch();

  const callback = (count) => {
    setAdd(count);
  };

  const consigneeCallback = (consigneeDetails) => {
    setConsigneeValue(consigneeDetails);
  };

  let area = username.location;

  const [booking, setBooking] = useState({
    docketNumber: "",
    origin: "",
    destination: "",
    consigner: "",
    consignee: consigneeValue,
    actualWeight: "",
    chargeWeight: "",
    volumetricWeight: add,
    invoiceNo: "",
    invoiceAmount: "",
    waybill: "",
    paymentMode: "",
    pickupBranch: area,
    remarks: "",
    handling: false,
  });

  const data = consigners.response;

  const inputHandle = (event) => {
    const { name, value } = event.target;
    if (name === "consigner") {
      const userExists = data.some((data) => data.consignerCode === value);
      if (userExists) {
        setConsignerVol(value);
      } else {
      }
    }
    if(name === "actualWeight"){
      if(value < add){
        setCompareAdd(add)
      } else{
        setCompareAdd(value)
      }
    }
    setBooking((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
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

    setBooking({
      docketNumber: "",
      origin: "",
      destination: "",
      consigner: "",
      consignee: consigneeValue,
      actualWeight: "",
      chargeWeight: compareAdd,
      volumetricWeight: add,
      invoiceNo: "",
      invoiceAmount: "",
      waybill: "",
      paymentMode: "",
      pickupBranch: area,
      remarks: "",
      handling: false,
    });
  }, [add, area, compareAdd, consigneeValue, consignerVol, dispatch, props.history, response]);

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
                // compareAdd={compareAdd}
                consigneeValue={consigneeValue}
                // consignerVol={consignerVol}
                callback={callback}
                consigneeCallback={consigneeCallback}
                onSubmit={onSubmit}
                area={area}
                // inputHandle={inputHandle}
              />
            </Col>
        </Row>
      </div>
    </>
  );
};

export default Booking;
