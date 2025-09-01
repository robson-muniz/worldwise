import React, {createContext, useState, useEffect, useContext} from "react";

// Define base API URL (note: in production, this would typically come from environment variables)
const BASE_URL = 'http://localhost:8000/'; // Keep trailing slash

const CitiesContext = createContext();

function CitiesProvider({ children }) {
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

    return <CitiesContext.Provider value={{ cities, isLoading }}>{children}</CitiesContext.Provider>;
}

// Moved the useCities function outside of CitiesProvider!
function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error('Cities must be used within CitiesProvider');
    return context;
}

export { CitiesProvider, useCities };