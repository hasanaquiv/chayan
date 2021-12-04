import { useEffect } from "react";
import { Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import { getConsignerCode } from "../../store/actions/consignerAction";

const BillingTop = (props) => {
  const { consignerCode, loader } = useSelector((state) => state.consigners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConsignerCode(props.id)); 
  }, [dispatch, props.id]);

  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // console.log(months[props.data.month])
  return (
    <>
      <Row>
        <div className="col-6">
          <address>
            <strong>Billed To:</strong>
            <br />
            {consignerCode.companyName} ({consignerCode.consignerCode})
            <br />
            {consignerCode.gstNumber}
            <br />
            {consignerCode.address1} {consignerCode.address2}
            <br />
            {consignerCode.city}, {consignerCode.state}, {consignerCode.pincode}
          </address>
        </div>
        <div className="col-6 text-end">
          <address>
            <strong>Invoice Number</strong>
            <br />
            CHL{props.invoiceNo}
            <br />
            <strong>Invoice Month</strong>
            <br />
            {props.data !== undefined && months[props.data[0].month]}
            <br />
            <strong>Invoice Date</strong>
            <br />
            {/* October 16, 2019 */}
            {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
          </address>
        </div>
      </Row>
    </>
  );
};

export default BillingTop;
