import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Background, Footer } from "./components";
import {
  HomeScreen,
  PrivacyPolicyScreen,
  TermsConditionsScreen,
} from "./screens";
import { Routes } from "./utils/constants";

function App() {
  return (
    <Router>
      <Background>
        <Switch>
          <Route exact path={Routes.Home}>
            <HomeScreen />
          </Route>
          <Route exact path={Routes.PrivacyPolicy}>
            <PrivacyPolicyScreen />
          </Route>
          <Route exact path={Routes.TermsConditions}>
            <TermsConditionsScreen />
          </Route>
        </Switch>
        <Footer />
      </Background>
    </Router>
  );
}

export default App;
