import React, { createContext, useState, useEffect, useContext, useCallback } from "react";

// Define base API URL
const BASE_URL = 'http://localhost:8000';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    // Fetch all cities on mount
    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);

                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const data = await res.json();
                setCities(data);
            } catch (err) {
                console.error('Fetch error:', err);
                alert(`Could not fetch cities: ${err.message}`);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCities();
    }, []);

    // Get individual city by ID
    async function getCity(id) {
        // Don't fetch if we already have this city
        if (Number(id) === currentCity.id) return;

        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);

            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

            const data = await res.json();
            setCurrentCity(data);
        } catch (err) {
            console.error('Fetch error:', err);
            alert(`Could not fetch city: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading,
                currentCity,
                getCity
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) {
        throw new Error('useCities must be used within a CitiesProvider');
    }
    return context;
}

export { CitiesProvider, useCities };