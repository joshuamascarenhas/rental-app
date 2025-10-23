import React, { createContext, useState, useEffect, useContext } from 'react';

const ListingsContext = createContext();

export function useListings() {
  return useContext(ListingsContext);
}

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Placeholder for fetching listings (replace with real API call)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setListings([
        {
          id: '1',
          title: 'Sample 2BHK Apartment',
          rent: 1200,
          verified: true,
          safetyScore: 85,
          location: 'Downtown',
        },
        // more mock data
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ListingsContext.Provider value={{ listings, loading, error }}>
      {children}
    </ListingsContext.Provider>
  );
}
