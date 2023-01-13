import React, { useState } from "react";
import "../css/App.css";
import { Product } from "../utils/types";
import { Header } from "./Header";
import { ProductList } from "./ProductList";

function App() {
  const products: Product[] = [
    { id: 1, name: "Bola", value: 40, src: "ball.png" },
    { id: 2, name: "Martelo", value: 15, src: "hammer.png" },
    { id: 3, name: "Furadeira", value: 500, src: "drill-machine.png" },
    { id: 4, name: "Mesa", value: 100.54, src: "desk.png" },
  ];
  const [selectedProduts, setSelectedProducts] = useState<number[]>([]);
  return (
    <div className="App">
      <Header selectedProduts={selectedProduts} products={products} />
      <ProductList
        products={products}
        selectedProducts={selectedProduts}
        setSelectedProducts={setSelectedProducts}
      ></ProductList>
    </div>
  );
}
export default App;
