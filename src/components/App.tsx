import React, { useState } from "react";
import "../css/App.css";
import { Header } from "./Header";
import { ProductList } from "./ProductList";

function App() {
  const [totalValue, setTotalValue] = useState<number>(0);
  return (
    <div className="App">
      <Header totalValue={totalValue} />
      <ProductList></ProductList>
    </div>
  );
}
export default App;
