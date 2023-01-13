import React from "react";
import { Product } from "./Product";

export function ProductList() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Product id={1} name="Bola" value={40} src="ball.png"></Product>
      <Product id={2} name="Martelo" value={15} src="hammer.png"></Product>
      <Product
        id={3}
        name="Furadeira"
        value={500}
        src="drill-machine.png"
      ></Product>
      <Product id={4} name="Mesa" value={1000.1} src="desk.png"></Product>
    </div>
  );
}
