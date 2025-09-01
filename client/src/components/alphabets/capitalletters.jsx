// CapitalLetters.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdChevronLeft } from "react-icons/md";
import logo from "../../assets/img/Toodler.png"; // Importing the local logo image
// import image from "../../assets/img/b.png"; // Importing the local logo image

const capitalletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const smallletter = "abcdefghijklmnopqrstuvwxyz".split("");
const vowels = "AEIOU".split("");
const numbers = [
  { id: '0', number: '0', name: 'Zero' },
  { id: '1', number: '1', name: 'One' },
  { id: '2', number: '2', name: 'Two' },
  { id: '3', number: '3', name: 'Three' },
  { id: '4', number: '4', name: 'Four' },
  { id: '5', number: '5', name: 'Five' },
  { id: '6', number: '6', name: 'Six' },
  { id: '7', number: '7', name: 'Seven' },
  { id: '8', number: '8', name: 'Eight' },
  { id: '9', number: '9', name: 'Nine' },
]

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
    <div className="bg-white mb-5 min-h-screen max-w-md flex flex-col items-center pt-8 px-6 font-indie relative">
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
      <p className="text-purple-600 text-3xl mb-6">Alphabets & Numbers</p>
      <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mb-5 mt-10'>Numbers</span>
      <div className="grid grid-cols-5 gap-[10px] w-full">
          {numbers.map((num) => (
            <button
              key={num.id}
              aria-label={`Play sound for letter ${num.number}`}
              className="bg-purple-600 rounded-md text-center text-white w-[74px] h-[74px] font-indie transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
              onClick={() => playSound(num.number)}
              type="button"
            >
              <span className="text-4xl">{num.number}</span><br />
              <span className="text-xl">{num.name}</span>
            </button>
          ))}
      </div>
      <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mb-5 mt-10'>Vowels</span>
      <div className="grid grid-cols-5 justify-center gap-[10px] w-full">
        {vowels.map((letter) => (
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
      <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mb-5 mt-10'>Capital Letters</span>
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
      <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mb-5 mt-10'>Small Letters</span>
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
