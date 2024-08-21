// src/components/UserSubmission.js
import React, { useState } from 'react';

const UserSubmission = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the submission (e.g., POST request to a backend or add to local state)
    alert('Artwork submitted! (This is a placeholder alert.)');
    // Reset the form
    setTitle('');
    setArtist('');
    setDescription('');
    setImage('');
    setThumbnail('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white shadow-lg rounded">
      <h2 className="text-xl font-bold mb-4">Submit Your Artwork</h2>
      <div className="mb-4">
        <label className="block mb-2">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Artist:</label>
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Image URL:</label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Thumbnail URL:</label>
        <input
          type="url"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default UserSubmission;
