import { useState } from "react";

const EnhancedTable = ({ parentCallback }) => {
  const [count, setCount] = useState(0);

  const handle = (event) => {
      const d = event.target.value
    setCount(d);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    parentCallback(count)
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" onChange={handle} value={count} />
      <button type="submit">
        Click me {count}
      </button>
    </form>
  );
};

export default EnhancedTable;
