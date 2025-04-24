import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";

const BASE_URL = "http://localhost:3000/"; // Keep trailing slash

function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() { // Fixed typo in function name
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}cities`);

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`); // Check for HTTP errors

        const data = await res.json();
        // console.log("Fetched data:", data); // Debugging log

        // Handle both response formats (array vs object with cities property)
        setCities(data.cities || data);
      } catch (err) {
        console.error("Fetch error:", err); // Detailed error logging
        alert(`Could not fetch cities: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities(); // Actually call the function
  }, []); // Empty dependency array = runs once on mount

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate to="cities" replace />} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="cities/:id" element={<City />} />
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;