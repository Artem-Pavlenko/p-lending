import React from "react";
import {
  AdminPanel,
  Background,
  Category,
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
    </Background>
  );
}

export default App;
