import React from "react";

export function Header(props: { totalValue: number }) {
  return (
    <header className="App-header">
      <p>Selecione seu Produto</p>
      <div style={{ display: "flex" }}>
        <p>
          <img style={{ width: "30px", height: "30px" }} src="cart.png"></img>{" "}
          Valor Total:{props.totalValue.toFixed(2)}
        </p>
      </div>
    </header>
  );
}
