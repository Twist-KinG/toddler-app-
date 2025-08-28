// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import LearnAlphabets from "./pages/learningalphabet";
import PictureMatching from "./pages/picmatching";
import Sounds from "./pages/Sounds";
import Animals from "./components/sounds/animals";
import Vehicles from "./components/sounds/vehicles";
import Instruments from "./components/sounds/instruments";
import Squiz from "./components/sounds/squiz";
import Capital from "./components/alphabets/capitalletters";
import Small from "./components/alphabets/smallletters";
import Lquiz from "./components/alphabets/lquiz";
import LetterMatch from "./components/alphabets/lettermatch";
import Story from "./pages/story";
import Settings from "./pages/settings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnalphabets" element={<LearnAlphabets />} />
        <Route path="/learnalphabets/capitalletters" element={<Capital />} />
        <Route path="/learnalphabets/smallletters" element={<Small />} />
        <Route path="/learnalphabets/lquiz" element={<Lquiz />} />
        <Route path="/learnalphabets/lettermatch" element={<LetterMatch />} />
        <Route path="/picturematching" element={<PictureMatching />} />
        <Route path="/sounds" element={<Sounds />} />
        <Route path="/sounds/animals" element={<Animals />} />
        <Route path="/sounds/vehicles" element={<Vehicles />} />
        <Route path="/sounds/instruments" element={<Instruments />} />
        <Route path="/sounds/squiz" element={<Squiz />} />
        <Route path="/story" element={<Story />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
