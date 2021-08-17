import React from "react";
import {
  Background,
  Category,
  FilterBlock,
  Header,
  Management,
} from "./components";

function App() {
  return (
    <Background>
      <Header />
      <Category />
      <FilterBlock />
      <Management />
    </Background>
  );
}

export default App;
