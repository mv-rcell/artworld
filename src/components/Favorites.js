// src/components/Favorites.js
import React, { useState, useEffect } from 'react';
import artworks from '../data/artworks'; // Same data file

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleAddFavorite = (artwork) => {
    const updatedFavorites = [...favorites, artwork];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-4">Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {artworks.filter(a => favorites.some(f => f.id === a.id)).map((artwork) => (
          <div
            key={artwork.id}
            className="border-2 border-gray-300 p-4 cursor-pointer hover:bg-gray-100"
          >
            <img src={artwork.thumbnail} alt={artwork.title} className="w-full h-auto mb-2" />
            <h2 className="text-lg font-bold">{artwork.title}</h2>
            <p className="text-gray-600">{artwork.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
