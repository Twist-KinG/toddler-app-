// Squiz.jsx
import React from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdChevronLeft } from "react-icons/md";
import logo from "../../assets/img/Toodler.png"; // Importing the local logo image
import image from "../../assets/img/b.png"; // Importing the local logo image
import { FaArrowCircleRight } from 'react-icons/fa';

const pquiz = () => {
  return (
   <div className="bg-white min-h-screen max-w-md flex flex-col items-center pt-8 px-6 font-indie relative">
         <Link to="/picturelearning">
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
         <h1 className="text-purple-600 text-5xl leading-tight mb-0">Quiz</h1>
         <p className="text-purple-600 text-3xl mb-6">Picture</p>
      <p className="text-black text-2xl mb-5 self-start ax-w-xs">1. Question here ?</p>
      <img
        alt="Placeholder image 340 by 240 with grey background"
        className="border-4 border-purple-600 rounded-md mb-6 max-w-full"
        height={240}
        width={340}
        src={image}
      />
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-w-xs w-full mb-10">
        {['A. Answer', 'B. Answer', 'C. Answer', 'D. Answer'].map((answer, idx) => (
          <button
            key={idx}
            type="button"
            className="bg-purple-600 text-white rounded-md py-2 px-4 text-center text-xl"
          >
            {answer}
          </button>
        ))}
      </div>
      <p className="text-black text-3xl mb-10">Answer 1 out of 5</p>
      <button
        type="button"
        className="bg-purple-600 text-white rounded-md py-1.5 px-4 flex items-center gap-2 text-xl"
      >
        Next <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default pquiz;
