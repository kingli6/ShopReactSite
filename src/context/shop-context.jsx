import React, { createContext, useState } from "react";
import { PRODUCTS } from "../assets/products";

export const ShopContext = createContext(null); //Step 1

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0; //is this how you set new items in an object? PRACTICE this!
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  //functions that will be used through context api technique? PRACTICE THIS
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); //confusion. needing a ( ) outside. Since we are returning an object?
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //Step 3. Creating a value-placeholder that has everything we want to pass on to other
  const contextValue = { cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider> //Step 2
  );
};
