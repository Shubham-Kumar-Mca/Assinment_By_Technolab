import SingleCart from "../../components/singleCart/SingleCart";
import { AuthContext } from "../../context/AuthContextProvider";
import React, { useContext } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state } = useContext(AuthContext);
  const { cartProducts } = state;

  // Calculating the total amount for all products in the cart
  const totalAmount = Math.round(
    cartProducts.reduce(
      (total, copyCartProduct) =>
        total + copyCartProduct.price * copyCartProduct.qty,
      0
    )
  );

  return (
    <div className="container">
      <div>
        {cartProducts.length > 0 ? (
          // Rendering the SingleCart component for each cartProduct
          cartProducts.map((cartProduct, index) => (
            <SingleCart key={index + 1} {...cartProduct} />
          ))
        ) : (
          // Displaying a message if the cart is empty
          <div className="noData__available">
            <h2>Data is not available in Cart, Please Add.</h2>
            <Link to="/">Go to Home Page</Link>
          </div>
        )}
      </div>
      <div className="total">
        {/* Displaying the total amount if there are products in the cart */}
        {cartProducts.length === 0 ? null : <h1>Total : ₹{totalAmount}</h1>}
      </div>
    </div>
  );
};

export default Cart;
