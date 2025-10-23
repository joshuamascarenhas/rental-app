import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = property => {
    setFavorites(prev => {
      if (prev.find(p => p.id === property.id)) return prev;
      return [...prev, property];
    });
  };

  const removeFavorite = propertyId => {
    setFavorites(prev => prev.filter(p => p.id !== propertyId));
  };

  const isFavorite = propertyId => favorites.some(p => p.id === propertyId);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
