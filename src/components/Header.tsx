import React from "react";
import { Product } from "../utils/types";

export function Header(props: {
  selectedProduts: number[];
  products: Product[];
}) {
  const totalValue = props.products
    .filter((p) => props.selectedProduts.includes(p.id))
    .map((p) => p.value)
    .reduce((previous, current) => previous + current);

  return (
    <header className="App-header">
      <p>Selecione seu Produto</p>
      <div style={{ display: "flex" }}>
        <p>
          <img style={{ width: "30px", height: "30px" }} src="cart.png"></img>{" "}
          {totalValue.toFixed(2)} R$
        </p>
      </div>
    </header>
  );
}
