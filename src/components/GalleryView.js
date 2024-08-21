// src/components/GalleryView.js
import React, { useState } from 'react';
import artworks from '../data/artworks'; // You’ll need to create this file with artwork data
import ArtworkDetail from './ArtworkDetail';

const GalleryView = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  return (
    <div className="flex flex-col">
      {selectedArtwork && <ArtworkDetail artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="border-2 border-gray-300 p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => handleArtworkClick(artwork)}
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

export default GalleryView;
