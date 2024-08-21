// src/components/ArtworkDetail.js
import React from 'react';

const ArtworkDetail = ({ artwork, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <button
          className="bg-red-600 text-white p-2 rounded mb-4"
          onClick={onClose}
        >
          Close
        </button>
        <img src={artwork.image} alt={artwork.title} className="w-full h-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">{artwork.title}</h2>
        <h3 className="text-xl text-gray-700 mb-2">{artwork.artist}</h3>
        <p>{artwork.description}</p>
      </div>
    </div>
  );
};

export default ArtworkDetail;
