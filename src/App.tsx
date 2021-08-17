import React from "react";
import {
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
    </Background>
  );
}

export default App;
