import { AuthContext } from "../../context/AuthContextProvider";
import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { state } = useContext(AuthContext);
  const { cartProducts } = state;

  // Calculating the total quantity of products in the cart
  const totalQuantity = cartProducts.reduce(
    (total, product) => total + product.qty,
    0
  );

  return (
    <div className="navbar-container">
      <div>
        <Link to="/">Shoping Cart</Link>
      </div>
      <Link to="/cart" className="cartIcon">
        <BsBag />
        <span>{totalQuantity}</span>
      </Link>
    </div>
  );
};

export default Navbar;
