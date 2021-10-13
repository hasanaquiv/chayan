import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../store/reducers/userReducer";

const Logout = (props) => {

  const dispatch = useDispatch();
  const {response} = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(logoutAction())
    if(response === "logout") {
      props.history.push("/login")
    }
  },[dispatch, props.history, response]);

  return <></>;
};

export default Logout;
