import { AuthContext } from "../../context/AuthContextProvider";
import React, { useContext } from "react";
import "./SingleProduct.css";

const SingleProduct = ({ title, price, image, id }) => {
  const { state, setState } = useContext(AuthContext);
  const { products, cartProducts } = state;

  // Function to handle adding a product to the cart
  const handelAddProduct = (newProduct) => {
    //Find Product is exist in cart or not
    const existingProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === newProduct.id
    );

    if (existingProduct) {
      // If the product already exists in the cart, update the quantity
      const updateCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.id === newProduct.id) {
          return { ...cartProduct, qty: cartProduct.qty + 1 };
        }
        return cartProduct;
      });

      setState((prevState) => ({
        ...prevState,
        cartProducts: updateCartProducts,
      }));
    } else {
      // If the product does not exist in the cart, add it as a new product
      setState({ ...state, cartProducts: [...state.cartProducts, newProduct] });
    }
  };

  // Function to find the current product and send add it to the cart
  const findCurrentProduct = (productId) => {
    const newProduct = products.find((product) => product.id === productId);
    handelAddProduct(newProduct);
  };

  return (
    <div className="singleProduct-container">
      <div>
        <img src={image} alt={`${title}_image`} />
        <h3>{title}</h3>
      </div>
      <div>
        <p>
          Price : <span style={{ fontWeight: "bold" }}>₹{price}</span>
        </p>
        {/* Button to add the current product to the cart */}
        <button type="button" onClick={() => findCurrentProduct(id)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
