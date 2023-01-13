import React from "react";
import { Product } from "../utils/types";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard(props: {
  id: number;
  name: string;
  value: number;
  src: string;
  products: Product[];
  selectedProducts: number[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  return (
    <div>
      <h4>{props.name}</h4>
      <img style={{ width: "60px", height: "60px" }} src={props.src}></img>
      <h5>{props.value.toFixed(2)} R$</h5>
      <AddToCartButton
        id={props.id}
        value={props.value}
        products={props.products}
        selectedProducts={props.selectedProducts}
        setSelectedProducts={props.setSelectedProducts}
      />
    </div>
  );
}
