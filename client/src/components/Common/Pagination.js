import { useState, useEffect } from "react";
import { Button } from "reactstrap";

const Pagination = (props) => {
  const { showPerPage, onPaginationChange, total } = props;
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, showPerPage]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (total !== undefined) {
        let tot = total.length;
        if (Math.ceil(tot / showPerPage) === counter) {
          setCounter(counter);      
        } else {
          setCounter(counter + 1);
        }
      }
    }
  };

  return (
    <>
      <div className="btn-group float-end">
        <Button
          type="button"
          color="success"
          size="sm"
          className="waves-effect"
          onClick={() => onButtonClick("prev")}
        >
          <i className="fa fa-chevron-left" />
        </Button>
        <Button
          type="button"
          color="success"
          size="sm"
          className="waves-effect"
          onClick={() => onButtonClick("next")}
        >
          <i className="fa fa-chevron-right" />
        </Button>
      </div>
    </>
  );
};

export default Pagination;
