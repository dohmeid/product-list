import React from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Filter from "./components/Filter/Filter";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <ProductList />
      <Filter />
    </div>
  );
}

export default App;
