import React, { createContext, useState } from "react";
import { PRODUCTS } from "../assets/products";

export const ShopContext = createContext(null); //Step 1

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0; //is this how you set new items in an object? PRACTICE this! Does the key become string?
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    //scan the object
    for (const item in cartItems) {
      // console.log(Object.keys(cartItems) + "keys");
      // console.log(Object.values(cartItems) + "values");

      // Is any of the value greater than 0? ie when user chooses to buy the item, we increase the value
      if (cartItems[item] > 0) {
        //find the item in the PRODUCT object array with the help of id // timestamp 56:00
        let iteminfo = PRODUCTS.find((product) => product.id === Number(item)); //the need for Number(). I need to remember that the for loop creates a string?
        totalAmount += cartItems[item] * iteminfo.price;
      }
    }
    return totalAmount;
  };

  //functions that will be used through context api technique? PRACTICE THIS
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); //confusion. needing a ( ) outside. Since we are returning an object?
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    //practice this!!!
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  //Step 3. Creating a value-placeholder that has everything we want to pass on to other
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider> //Step 2
  );
};
