import React from "react";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard(props: {
  id: number;
  name: string;
  value: number;
  src: string;
}) {
  return (
    <div>
      <h4>{props.name}</h4>
      <img style={{ width: "60px", height: "60px" }} src={props.src}></img>
      <h5>{props.value.toFixed(2)} R$</h5>
      <AddToCartButton id={props.id} value={props.value} />
    </div>
  );
}
