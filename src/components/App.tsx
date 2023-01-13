import React, { useState } from "react";
import { CartShopContext } from "../context/CartShopContext";
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
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  return (
    <div className="App">
      <CartShopContext.Provider
        value={{ selectedProducts, setSelectedProducts, products }}
      >
        <Header />
        <ProductList products={products}></ProductList>
      </CartShopContext.Provider>
    </div>
  );
}
export default App;
