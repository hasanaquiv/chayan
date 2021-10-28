import React from "react";

const Checkbox = ({ id, type, name, handleClick, isChecked,className }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      className={className}
      checked={isChecked}      
      className="form-check-input"
    />
  );
};

export default Checkbox;
