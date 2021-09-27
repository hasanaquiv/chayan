import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import PrintDocket from "./pages/Booking/PrintDocket";




import Home from "./Home";

// import { connect } from "react-redux";

import HorizontalLayout from "./components/HorizontalLayout";
import NonAuthLayout from "./components/NonAuthLayout";

// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes";

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"; 

// Import scss
import "./assets/scss/theme.scss";

// console.log(userRoutes)

const App = (props) => {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/home/:id" component={Home} /> */}
          {/* <Route path="/print-docket/:id" component={PrintDocket} /> */}
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={HorizontalLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default App;
