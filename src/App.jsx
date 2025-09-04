// Import routing components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
import City from "./pages/City.jsx";
import Form from './components/Form.jsx';
import Map from './components/Map.jsx'; // ← ADD THIS IMPORT!
import { CitiesProvider } from "./contexts/CitiesContext.jsx";

// Main App component
function App() {
    // Main component render
    return (
        // Wrap the entire app with CitiesProvider
        <CitiesProvider>
            {/* Set up the router for the application */}
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="product" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="login" element={<Login />} />
                    <Route path="app" element={<AppLayout />}>
                        <Route index element={<Map />} /> {/* Now Map is imported */}
                        <Route path="cities" element={<CityList />} />
                        <Route path="countries" element={<CountryList />} />
                        <Route path="form" element={<Form />} />
                        <Route path="cities/:id" element={<City />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </CitiesProvider>
    );
}

export default App;