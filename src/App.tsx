import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Background, Footer, Modal } from "./components";
import {
  HomeScreen,
  PrivacyPolicyScreen,
  TermsConditionsScreen,
} from "./screens";
import { Routes } from "./utils/constants";

function App() {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <Router>
      <Background>
        <Modal showModal={showModal} onClose={onCloseModal} />
        <Switch>
          <Route exact path={Routes.Home}>
            <HomeScreen showModalHandler={onShowModal} />
          </Route>
          <Route exact path={Routes.PrivacyPolicy}>
            <PrivacyPolicyScreen />
          </Route>
          <Route exact path={Routes.TermsConditions}>
            <TermsConditionsScreen />
          </Route>
        </Switch>
        <Footer showModalHandler={onShowModal} />
      </Background>
    </Router>
  );
}

export default App;
