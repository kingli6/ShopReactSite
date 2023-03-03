//
import "./navbar.css";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/support">Contact</Link>
        <Link to="/cart">
          {/* //this is a icon */}
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
