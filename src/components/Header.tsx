import React, { useContext } from "react";
import CartShopContext from "../context/CartShopContext";
import { Product } from "../utils/types";

export function Header(props: {}) {
  const { selectedProducts, products } = useContext(CartShopContext);

  const totalValue =
    selectedProducts.length > 0
      ? selectedProducts
          .map((id) => products.find((p) => p.id == id)?.value || 0)
          .reduce((previous, current) => previous + current)
      : 0;

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
