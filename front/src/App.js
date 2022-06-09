import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthorizePage from "./pages/AuthorizePage";
import MyAccountPage from "./pages/MyAccountPage";
import IndividualProductPage from "./pages/IndividualProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';


const App = () => {
  return(
    <div className = "page-container">
    <div className = "Content-wrap">
  
  <Router >
    <Header />
    <Switch>
      <Route path="/" component={home} exact>
        <home />
      </Route>
      <Route path="/" component={SignIn} exact>
        <authorizepage />
      </Route>
      <Route path="/" component={SignUp} exact>
        <authorizepage />
      </Route>
      <Route path="/" component={MyAccount} exact>
        <myaccountpage />
      </Route>
      <Route path="/" component={IndProduct} exact>
        <individualproductpage />
      </Route>
    </Switch>
    </Router>
    </div>
    <Footer />
    </div>
  );
  
}

export default App;
