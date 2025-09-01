// CapitalLetters.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdChevronLeft } from "react-icons/md";
import logo from "../../assets/img/Toodler.png"; // Importing the local logo image
// import image from "../../assets/img/b.png"; // Importing the local logo image

const capitalletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const smallletter = "abcdefghijklmnopqrstuvwxyz".split("");

const CapitalLetters = () => {
  // Use a ref to store audio elements mapped by letter
  // const audioMapRef = useRef({});

  // useEffect(() => {
  //   // Preload audio elements for each letter
  //   const audioMap = {};
  //   letters.forEach(letter => {
  //     audioMap[letter] = new Audio(`https://actions.google.com/sounds/v1/letters/letter_${letter.toLowerCase()}.mp3`);
  //   });
  //   audioMapRef.current = audioMap;
  // }, []);

  // const playSound = (letter) => {
  //   const audio = audioMapRef.current[letter];
  //   if (audio) {
  //     audio.pause();
  //     audio.currentTime = 0;
  //     audio.play();
  //   }
  // };

  return (
    <div className="bg-white min-h-screen max-w-md flex flex-col items-center pt-8 px-6 font-indie relative">
      <Link to="/learnalphabets">
        <button className="absolute top-4 left-4 p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition">
          <MdChevronLeft className="text-white text-2xl" />
        </button>
      </Link>

      {/* Logo */}
      <img
        src={logo} // Using the imported logo image
        alt="Toddler Fun Learning logo with two kids and stars"
        className="w-30 h-30 mb-1"
        width={60}
        height={60}
      />
      {/* Title */}
      <h1 className="text-purple-600 text-5xl leading-tight mb-0">English</h1>
      <p className="text-purple-600 text-3xl mb-6">Alphabets</p>
      <p>Capital Letters</p>
      <div className="grid grid-cols-5 justify-center gap-[10px] w-full">
        {capitalletter.map((letter) => (
          <button
            key={letter}
            aria-label={`Play sound for letter ${letter}`}
            className="bg-purple-600 rounded-md py-4 text-4xl text-white w-[74px] h-[74px] font-normal transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            onClick={() => playSound(letter)}
            type="button"
          >
            {letter}
          </button>
        ))}
      </div>
      <p>Small Letters</p>
      <div className="grid grid-cols-5 justify-center gap-[10px] w-full">
        {smallletter.map((letter) => (
          <button
            key={letter}
            aria-label={`Play sound for letter ${letter}`}
            className="bg-purple-600 rounded-md py-4 text-4xl text-white w-[74px] h-[74px] font-normal transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            onClick={() => playSound(letter)}
            type="button"
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CapitalLetters;
