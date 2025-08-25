// Import React and necessary hooks
import React, { useEffect, useState } from 'react';
// Import routing components from react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import page components
import Product from './pages/Product.jsx';
import Pricing from './pages/Pricing.jsx';
import Homepage from './pages/Homepage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import AppLayout from './pages/AppLayout.jsx';
import Login from './pages/Login.jsx';

// Import component modules
import CityList from './components/CityList.jsx';
import CountryList from './components/CountryList.jsx';
import City from './components/City.jsx';
import Form from './components/Form.jsx';

// Define base API URL (note: in production, this would typically come from environment variables)
const BASE_URL = 'http://localhost:3000/'; // Keep trailing slash

// Main App component
function App() {
  // State for storing cities data and loading status
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Effect hook to fetch cities data when component mounts
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}cities`);

        // Check for HTTP errors
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();

        // Handle both response formats (array vs object with cities property)
        setCities(data.cities || data);
      } catch (err) {
        console.error('Fetch error:', err);
        alert(`Could not fetch cities: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities(); // Execute the fetch function
  }, []); // Empty dependency array means this runs only once on component mount!

  // Main component render
  return (
      // Set up the router for the application
      <BrowserRouter>
        {/* Define all application routes */}
        <Routes>
          {/* Home route (index) */}
          <Route index element={<Homepage />} />

          {/* Other top-level routes */}
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />

          {/* Nested routes under the AppLayout */}
          <Route path="app" element={<AppLayout />}>
            {/* Default nested route redirects to cities */}
            <Route index element={<Navigate to="cities" replace />} />

            {/* Cities-related routes */}
            <Route
                path="cities"
                element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:id" element={<City />} />

            {/* Countries route */}
            <Route
                path="countries"
                element={<CountryList cities={cities} isLoading={isLoading} />}
            />

            {/* Form route */}
            <Route path="form" element={<Form />} />
          </Route>

          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;