import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import Product from "./pages/Product.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;