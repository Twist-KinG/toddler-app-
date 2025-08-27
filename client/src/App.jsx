// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"; // Import your Home component
import LearnAlphabets from "./pages/learningalphabet"; // Import the target component for Learn Alphabets
import PictureMatching from "./pages/picmatching"; // Import the target component for Picture Matching
import Sounds from "./pages/Sounds"; // Import the target component for Sounds
import Animals from "./components/sounds/animals"; // Import Animals component
import Vehicles from "./components/sounds/vehicles"; // Import Vehicles component
import Instruments from "./components/sounds/instruments"; // Import Instruments component
import Squiz from "./components/sounds/squiz"; // Import Squiz component
import Quiz from "./pages/story"; // Import the target component for Quiz
import Settings from "./pages/settings"; // Import the target component for Settings

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LearnAlphabets" element={<LearnAlphabets />} />
        <Route path="/PictureMatching" element={<PictureMatching />} />
        <Route path="/Sounds" element={<Sounds />} />
        <Route path="/Sounds/animals" element={<Animals />} />
        <Route path="/Sounds/vehicles" element={<Vehicles />} />
        <Route path="/Sounds/instruments" element={<Instruments />} />
        <Route path="/Sounds/squiz" element={<Squiz />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
