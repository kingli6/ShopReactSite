import React, { useContext } from "react";
import { PRODUCTS } from "../../assets/products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount(); //using the function directly in the html section didn't work.
  const navigate = useNavigate();

  return (
    <div className="cart">
      {totalAmount > 0 ? (
        <>
          <div>
            <h1>Your Cart Items</h1>
          </div>

          <div className="cart">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>
          <div className="checkout">
            <p>Subtota: ${totalAmount}</p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button>Checkout</button>
          </div>
        </>
      ) : (
        <h2> Your cart is empty</h2>
      )}
    </div>
  );
};

export default Cart;
