import React from "react";
import { Product } from "../utils/types";

export function AddToCartButton(props: {
  id: number;
  value: number;
  products: Product[];
  selectedProducts: number[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  function addProduct() {
    if (!props.selectedProducts.includes(props.id))
      props.setSelectedProducts([...props.selectedProducts, props.id]);
  }
  console.log(props.selectedProducts);
  return <button onClick={addProduct}> Adicionar ao Carrinho</button>;
}
