import React, { useContext } from "react";
import { CartShopContext } from "../context/CartShopContext";
import { Product } from "../utils/types";

export function AddToCartButton(props: {
  id: number;
  value: number;
  products: Product[];
}) {
  const { selectedProducts, setSelectedProducts } = useContext(CartShopContext);
  function addProduct() {
    setSelectedProducts([...selectedProducts, props.id]);
  }
  return <button onClick={addProduct}> Adicionar ao Carrinho</button>;
}
