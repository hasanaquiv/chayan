import { AvField } from "availity-reactstrap-validation";

const InputField = (props) => {
  return (
    <div className="mb-3">
      <AvField
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        errorMessage={props.errorMessage}
        className="form-control"
        onChange={props.onChange}
        value={props.value}
        validate={{ required: { value: true } }}
        id="validationCustom01"
        required
      />
    </div>
  );
};

export default InputField;
