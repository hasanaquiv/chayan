import { useEffect } from "react";
import { Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import { getConsignerCode } from "../../store/actions/consignerAction";

const BillingTop = (props) => {
  const { consignerCode, loader} = useSelector((state) => state.consigners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConsignerCode(props.id));
  }, [dispatch, props.id]);

  const date = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <>
      <Row>
        <div className="col-6">
          <address>
            <strong>Billed To:</strong>
            <br />
            {consignerCode.consignerCode}
            <br />
            {consignerCode.address1}
            <br />
            {consignerCode.address2}
            <br />
            {consignerCode.city}, {consignerCode.state}, {consignerCode.pincode}
          </address>
        </div>
        <div className="col-6 text-end">
          <address>
            <strong>Invoice Number</strong>
            <br />
            Kenny Rigdon
            <br />
            <strong>Invoice Month</strong>
            <br />
            Apt. 4B
            <br />
            <strong>Invoice Date</strong>
            <br />
            {/* October 16, 2019 */}
            {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
          </address>
        </div>
      </Row>
      {/* <Row>
        <div className="col-6 mt-3 text-end">
          <address>
            <strong>Order Date:</strong>
            <br />
            October 16, 2019
            <br />
            <br />
          </address>
        </div>
      </Row> */}
    </>
  );
};

export default BillingTop;
