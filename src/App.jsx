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
import { CitiesProvider } from "./contexts/CitiesContext.jsx";

// Main App component
function App() {
    // Main component render
    return (
        // Wrap the entire app with CitiesProvider
        <CitiesProvider>
            {/* Set up the router for the application */}
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
                            element={<CityList />}
                        />
                        <Route path="cities/:id" element={<City />} />

                        {/* Countries route */}
                        <Route
                            path="countries"
                            element={<CountryList />}
                        />

                        {/* Form route */}
                        <Route path="form" element={<Form />} />
                    </Route>

                    {/* Catch-all route for 404 errors */}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </CitiesProvider>
    );
}

export default App;