import React from "react";
import { PRODUCTS } from "../../assets/products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((items) => (
          <Product data={items} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
