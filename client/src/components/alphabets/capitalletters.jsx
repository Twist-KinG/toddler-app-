
import React from 'react';
import { Link } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import logo from "../../assets/img/Toodler.png";


const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const smallLetters = "abcdefghijklmnopqrstuvwxyz".split("");
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
];

// Play sound function

const playSound = (key) => {

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  const audio = new Audio(`/sounds/EnglishAlphabet/${key.toLowerCase()}.mp3`);


  const track = audioContext.createMediaElementSource(audio);


  const gainNode = audioContext.createGain();

  gainNode.gain.value = 5; //increase 5x volume

  track.connect(gainNode).connect(audioContext.destination);

  audio.play().catch(err => console.log("Error playing sound:", err));
};




const CapitalLetters = () => {
  return (
    <div className="bg-white mb-5 min-h-screen max-w-md flex flex-col items-center pt-8 px-6 font-indie relative">
      <Link to="/learnalphabets">
        <button className="absolute top-4 left-4 p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition">
          <MdChevronLeft className="text-white text-2xl" />
        </button>
      </Link>

      {/* Logo */}
      <img
        src={logo}
        alt="Toddler Fun Learning logo with two kids and stars"
        className="w-30 h-30 mb-1"
        width={60}
        height={60}
      />

      <h1 className="text-purple-600 text-5xl leading-tight mb-0">English</h1>
      <p className="text-purple-600 text-3xl mb-6">Alphabets & Numbers</p>

      {/* Numbers */}
      <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mb-5 mt-10'>Numbers</span>
      <div className="grid grid-cols-5 gap-[10px] w-full">
        {numbers.map(num => (
          <button
            key={num.id}
            className="bg-purple-600 rounded-md text-center text-white w-[74px] h-[74px] font-indie transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            onClick={() => playSound(num.number)}
            type="button">
            <span className="text-4xl">{num.number}</span><br />
            <span className="text-xl">{num.name}</span>
          </button>
        ))}
      </div>

      {/* Vowels */}
      <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mb-5 mt-10'>Vowels</span>
      <div className="grid grid-cols-5 justify-center gap-[10px] w-full">
        {vowels.map(letter => (
          <button
            key={letter}
            className="bg-purple-600 rounded-md py-4 text-4xl text-white w-[74px] h-[74px] font-normal transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            onClick={() => playSound(letter)}
            type="button">
            {letter}
          </button>
        ))}
      </div>

      {/* Capital Letters */}
      <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mb-5 mt-10'>Capital Letters</span>
      <div className="grid grid-cols-5 justify-center gap-[10px] w-full">
        {capitalLetters.map(letter => (
          <button
            key={letter}
            className="bg-purple-600 rounded-md py-4 text-4xl text-white w-[74px] h-[74px] font-normal transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            onClick={() => playSound(letter)}
            type="button">
            {letter}
          </button>
        ))}
      </div>

      {/* Small Letters */}
      <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mb-5 mt-10'>Small Letters</span>
      <div className="grid grid-cols-5 justify-center gap-[10px] w-full">
        {smallLetters.map(letter => (
          <button
            key={letter}
            className="bg-purple-600 rounded-md py-4 text-4xl text-white w-[74px] h-[74px] font-normal transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            onClick={() => playSound(letter)}
            type="button">
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CapitalLetters;
