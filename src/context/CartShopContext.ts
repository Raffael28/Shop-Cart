import React from "react";
import { useState } from "react";
import { Product } from "../utils/types";
export type CartShopContextType = {
  selectedProducts: number[];
  setSelectedProducts: (products: number[]) => void;
  products: Product[];
};
export const CartShopContext = React.createContext<CartShopContextType>({
  selectedProducts: [],
  setSelectedProducts: () => {},
  products: [],
});
export default CartShopContext;
