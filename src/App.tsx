import React from "react";
import {
  AdminPanel,
  Background,
  Category,
  FAQ,
  FilterBlock,
  Footer,
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
      <Footer />
    </Background>
  );
}

export default App;
