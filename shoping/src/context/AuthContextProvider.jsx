import React, { createContext, useState } from "react";

// Creating the AuthContext using createContext()
export const AuthContext = createContext();

// Initial state for the AuthContext
const initialProduct = {
  isLoading: true,
  isError: false,
  products: [],
  cartProducts: [],
};

const AuthContextProvider = ({ children }) => {
  // Using useState() hook to manage the state of the AuthContext
  const [state, setState] = useState(initialProduct);

  // Function to handle quantity changes for a specific product in the cart
  const handelQuantity = (e, productId) => {
    const { value } = e.target;
    if (Number(value) >= 1) {
      // Updating the quantity of the product in the cart
      const updateQty = state.cartProducts.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return { ...cartProduct, qty: Number(value) };
        }
        return cartProduct;
      });
      setState((prevState) => ({ ...prevState, cartProducts: updateQty }));
    }
  };

  // Function to remove a product from the cart
  const handelRemoveProduct = (productId) => {
    // Filtering out the product to be removed from the cart
    const filteredData = state.cartProducts.filter(
      (cartProduct) => cartProduct.id !== productId
    );
    setState((prevState) => ({ ...prevState, cartProducts: filteredData }));
  };

  //  Wrapping the children components within the AuthContext.Provider
  return (
    <AuthContext.Provider
      value={{ state, setState, handelRemoveProduct, handelQuantity }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
