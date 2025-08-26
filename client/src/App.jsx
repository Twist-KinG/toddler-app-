import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"; // Import your Home component
import LearnAlphabets from "./pages/learningalphabet"; // Import the target component for Learn Alphabets
import PictureMatching from "./pages/picmatching"; // Import the target component for Picture Matching
import AnimalSounds from "./pages/animalsound"; // Import the target component for Animal Sounds
import VehicleSounds from "./pages/vehiclesound"; // Import the target component for Vehicle Sounds
import Settings from "./pages/settings";// Import the target compponent for Settings

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LearnAlphabets" element={<LearnAlphabets />} />
        <Route path="/PictureMatching" element={<PictureMatching />} />
        <Route path="/AnimalSounds" element={<AnimalSounds />} />
        <Route path="/VehicleSounds" element={<VehicleSounds />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
