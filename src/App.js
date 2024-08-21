// src/App.js
import React, { useState } from 'react';
import GalleryView from './components/GalleryView';
import UserSubmission from './components/UserSubmission';
import './index.css'
import Favorites from './components/Favorites';;

function App() {
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  return (
    <div className="min-h-screen bg-yellow-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl">Virtual Art Gallery</h1>
        <button
          className="bg-red-600 text-white p-2 rounded mt-2"
          onClick={() => setShowSubmissionForm(!showSubmissionForm)}
        >
          {showSubmissionForm ? 'Close Submission Form' : 'Submit Your Artwork'}
        </button>
      </header>
      <main className="p-4">
        {showSubmissionForm && <UserSubmission />}
        <GalleryView />
      </main>
    </div>
  );
}

export default App;
