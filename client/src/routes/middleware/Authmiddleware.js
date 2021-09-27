import React from "react";
import { Route, Redirect } from "react-router-dom";

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest 
}) => (
  <Route
    render={(props) => {
      if (isAuthProtected && !localStorage.getItem("authUser")) {
        return <Redirect to="/login" />;
      }
      return (
        <Layout>
          <Component {...props}/>
        </Layout>
      );
    }}
  />
);

export default Authmiddleware;
