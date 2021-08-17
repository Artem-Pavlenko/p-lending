import React from "react";
import {
  AdminPanel,
  Background,
  Category,
  FAQ,
  FilterBlock,
  Header,
  Management,
  PaymentOptions,
} from "./components";

function App() {
  return (
    <Background>
      <Header />
      <Category />
      <FilterBlock />
      <Management />
      <PaymentOptions />
      <AdminPanel />
      <FAQ />
    </Background>
  );
}

export default App;
