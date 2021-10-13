import { Button, Form } from "reactstrap";

const Toolbar = (props) => {
  return (
    <>
      <div className="btn-toolbar p-3" role="toolbar">
        <div className="btn-group me-2 mb-2 mb-sm-0">
          <Button
            type="button"
            color="primary"
            className="waves-light waves-effect"
          >
            <i className="fa fa-exclamation-circle" />
          </Button>
          <Button
            type="button"
            color="primary"
            className="waves-light waves-effect"
          >
            <i className="far fa-trash-alt" />
          </Button>
        </div>
        <div className="btn btn-primary" tag="i">
          <Form>
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={props.inputHandle}
              />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
