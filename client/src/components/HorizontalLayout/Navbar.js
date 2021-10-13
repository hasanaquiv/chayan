import NavAdmin from "./Nav/NavAdmin";
import Loader from "./Loader";

import NavBillingAdmin from "./Nav/NavBillingAdmin";
import NavSubAdmin from "./Nav/NavSubAdmin.";
import NavPodAdmin from "./Nav/NavPodAdmin";

import { useSelector } from "react-redux";

const Navbar = (props) => {
  const { username, loader, response } = useSelector((state) => state.users);

  // const role = username !== undefined ? username.role: 1;
  const role = username.role;

  switch (role) {
    case 0:
      return <NavAdmin />;
    case 1:
      return <NavSubAdmin/>;
    case 2:
      return <NavPodAdmin/>;
    case 3:
      return <NavBillingAdmin/>;
    default:
      return <Loader/>
  }
};

export default Navbar;
