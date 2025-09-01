// CapitalLetters.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdChevronLeft } from "react-icons/md";
import logo from "../../assets/img/Toodler.png"; // Importing the local logo image
// import image from "../../assets/img/b.png"; // Importing the local logo image


const letters = [
  { id: '1', title: 'क' },
  { id: '2', title: 'ख' },
  { id: '3', title: 'ग' },
  { id: '4', title: 'घ' },
  { id: '5', title: 'ङ' },
  { id: '6', title: 'च' },
  { id: '7', title: 'छ' },
  { id: '8', title: 'ज' },
  { id: '9', title: 'झ' },
  { id: '10', title: 'ञ' },
  { id: '11', title: 'ट' },
  { id: '12', title: 'ठ' },
  { id: '13', title: 'ड' },
  { id: '14', title: 'ढ' },
  { id: '15', title: 'ण' },
  { id: '16', title: 'त' },
  { id: '17', title: 'थ' },
  { id: '18', title: 'द' },
  { id: '19', title: 'ध' },
  { id: '20', title: 'न' },
  { id: '21', title: 'प' },
  { id: '22', title: 'फ' },
  { id: '23', title: 'ब' },
  { id: '24', title: 'भ' },
  { id: '25', title: 'म' },
  { id: '26', title: 'य' },
  { id: '27', title: 'र' },
  { id: '28', title: 'ल' },
  { id: '29', title: 'व' },
  { id: '30', title: 'ष' },
  { id: '31', title: 'श' },
  { id: '32', title: 'स' },
  { id: '33', title: 'ह' },
  { id: '34', title: 'क्ष' },
  { id: '35', title: 'त्र' },
  { id: '36', title: 'ज्ञ' },
]
const words = [
  { id: '1', title: 'अ' },
  { id: '2', title: '' },
  { id: '3', title: 'इ' },
  { id: '4', title: '' },
  { id: '5', title: 'ङ' },
  { id: '6', title: 'च' },
  { id: '7', title: 'छ' },
  { id: '8', title: 'ज' },
  { id: '9', title: 'झ' },
  { id: '10', title: 'ञ' },
  { id: '11', title: 'ट' },
  { id: '12', title: 'ठ' },
  { id: '13', title: 'ड' }
]

const SmallLetters = () => {
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
      <h1 className="text-purple-600 text-5xl leading-tight mb-0">नेपाली</h1>
      <p className="text-purple-600 text-3xl mb-6">वर्णमाला</p>
      <p>Byanjan Barna</p>
      <div className="grid grid-cols-5  gap-[10px] w-full">
        {letters.map((letter) => (
          <button
            key={letter.id}
            aria-label={`Play sound for letter ${letter.title}`}
            className="bg-purple-600 rounded-md py-4 text-4xl text-white w-[74px] h-[74px] font-normal transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            onClick={() => playSound(letter.title)}
            type="button"
          >
            {letter.title}
          </button>
        ))}
      </div>
      <p>Swar Barna</p>
      <div className="grid grid-cols-5  gap-[10px] w-full">
        {words.map((letter) => (
          <button
            key={letter.id}
            aria-label={`Play sound for letter ${letter.title}`}
            className="bg-purple-600 rounded-md py-4 text-4xl text-white w-[74px] h-[74px] font-normal transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            onClick={() => playSound(letter.title)}
            type="button"
          >
            {letter.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SmallLetters;
