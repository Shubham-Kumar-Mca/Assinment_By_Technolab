import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Render the Navbar component */}
      <Navbar />
      <Routes>
        {/* Set up routes for the Home and Cart pages */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
