import React, { useContext } from "react";
import "./SingleCart.css";
import { AuthContext } from "../../context/AuthContextProvider";

const SingleCart = ({ title, price, image, qty, id }) => {
  // Accessing the functions from the AuthContext
  const { handelRemoveProduct, handelQuantity } = useContext(AuthContext);

  
  return (
    <div className="cart">
      <div className="cart-section">
        <div>
          <img src={image} alt={`${image}_logo`} />
        </div>
        <p className="title">{title}</p>
        <div>
          {/* Input field for changing the quantity */}
          <input type="number" value={qty} onChange={(e)=>handelQuantity(e, id)} />
          <p>{price}</p>
        </div>
        <h4>Total : ₹{Math.round(price * qty)}</h4>
        {/* Button to remove the product from the cart */}
        <button onClick={() => handelRemoveProduct(id)}>Remove</button>
      </div>
    </div>
  );
};

export default SingleCart;
