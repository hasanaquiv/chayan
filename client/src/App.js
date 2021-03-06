import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Test from "./pages/test/Test";

import DocketTrack from "./frontEnd/DocketTrack";
import Contact from "./frontEnd/Contact";
import Career from "./frontEnd/Career";
import About from "./frontEnd/About";
import Home from "./frontEnd/Home"; 
import Logistics from "./frontEnd/Logistics"; 


import HorizontalLayout from "./components/HorizontalLayout";
import NonAuthLayout from "./components/NonAuthLayout";

// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes";

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"; 


// Import scss
import "./assets/scss/theme.scss";

import "./custom.css"

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
          <Route exact path="/career" component={Career}/>
          <Route exact path="/docket-track" component={DocketTrack}/>
          <Route exact path="/logistics" component={Logistics}/>
          <Route exact path="/test" component={Test}/>
        </Switch>
      </Router>
    </>
  );
};

export default App;
