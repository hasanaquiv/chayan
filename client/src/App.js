import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import DocketTrack from "./frontEnd/DocketTrack";
import Contact from "./frontEnd/Contact";
import About from "./frontEnd/About";
import Home from "./frontEnd/Home"; 


import HorizontalLayout from "./components/HorizontalLayout";
import NonAuthLayout from "./components/NonAuthLayout";

// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes";

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"; 

// Import scss
import "./assets/scss/theme.scss";

const App = (props) => {
  return (
    <>
      <Router>
        <Switch>
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
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/docket-track" component={DocketTrack}/>
        </Switch>
      </Router>
    </>
  );
};

export default App;
