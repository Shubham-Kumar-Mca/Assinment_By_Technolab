import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { productData } from "../../data";
import SingleProduct from "../../components/product/SingleProduct";
import "./Home.css";

const Home = () => {
  const { state, setState } = useContext(AuthContext);
  const { isLoading, products } = state;

  //Update Products array with delay 2second.
  useEffect(() => {
    setTimeout(()=>{
      // Simulating a delay and updating the state with fetched product data
      setState({ ...state, isLoading: false, products: productData });
    },2000)
  }, [setState]);


  return (
    <div className="container">
      {/* During this delay (2second), a loading message is displayed. */}
      {isLoading ? (
        <h2 style={{textAlign : "center"}}>Loading...</h2>
      ) : (
        //  Once the data is loaded, the product list is rendered using the SingleProduct component.
        <div className="prdoct-conatiner">
          {products?.map((product) => (
            // Rendering individual products using the SingleProduct component
            <SingleProduct key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
