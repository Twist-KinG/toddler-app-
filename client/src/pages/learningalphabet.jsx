import React from "react";
import { Link } from "react-router-dom";
import { FaClone, FaStar, FaRegStar, FaSmile } from "react-icons/fa";
import { MdChevronRight, MdQuiz, MdChevronLeft } from "react-icons/md";
import { RxLetterCaseLowercase, RxLetterCaseUppercase } from "react-icons/rx";
import logo from "../assets/img/Toodler.png";

const LearningAlphabet = () => {
  return (
    <div className="bg-white min-h-screen max-w-md flex flex-col items-center px-6 pt-6 pb-10 font-indie relative animate-fadeIn">

      {/* Back Button */}
      <Link to="/">
        <button className="absolute top-4 left-4 p-2 bg-purple-600 rounded-full text-white animate-fadeIn">
          <MdChevronLeft className="text-2xl" />
        </button>
      </Link>

      {/* Logo */}
      <img
        src={logo}
        alt="Toddler Fun Learning logo with two kids and stars"
        className="w-30 h-30 mb-1 animate-bounce-slow"
        width={60}
        height={60}
      />

      {/* Title */}
      <h1 className="text-purple-600 text-5xl leading-tight mb-0 animate-fadeInUp">Learn</h1>
      <p className="text-purple-600 text-3xl mb-6 animate-fadeInUp delay-200">Alphabets</p>

      {/* Buttons container */}
      <div className="w-full max-w-md space-y-4 mt-15 mb-8">
        {/* English Alphabets & Numbers */}
        <Link to="capitalletters">
          <button
            type="button"
            className="flex items-center justify-between bg-purple-600 rounded-lg py-4 px-5 w-full text-white text-lg animate-stagger delay-100"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-purple-500 rounded-md flex items-center justify-center" style={{ width: 36, height: 36 }}>
                <RxLetterCaseUppercase className="text-white text-lg" />
              </div>
              <span>English Alphabets & Numbers</span>
            </div>
            <MdChevronRight className="text-white text-lg animate-pulse" />
          </button>
        </Link>

        {/* नेपाली वर्णमाला */}
        <Link to="smallletters">
          <button
            type="button"
            className="flex items-center justify-between bg-red-600 rounded-lg py-4 px-5 w-full text-white text-lg mt-5 animate-stagger delay-200"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-red-500 p-3 rounded-md flex items-center justify-center" style={{ width: 36, height: 36 }}>
                <RxLetterCaseLowercase className="text-white text-lg" />
              </div>
              <span>नेपाली वर्णमाला</span>
            </div>
            <MdChevronRight className="text-white text-lg animate-pulse" />
          </button>
        </Link>

        {/* Letter Match */}
        <Link to="lettermatch">
          <button
            type="button"
            className="flex items-center justify-between bg-orange-600 rounded-lg py-4 px-5 w-full text-white text-lg mt-5 animate-stagger delay-300"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 p-3 rounded-md flex items-center justify-center" style={{ width: 36, height: 36 }}>
                <FaClone className="text-white text-lg" />
              </div>
              <span>Letter Match</span>
            </div>
            <MdChevronRight className="text-white text-lg animate-pulse" />
          </button>
        </Link>

        {/* Quiz */}
        <Link to="lquiz">
          <button
            type="button"
            className="flex items-center justify-between bg-green-600 rounded-lg py-4 px-5 w-full text-white text-lg mt-5 animate-stagger delay-400"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-3 rounded-md flex items-center justify-center" style={{ width: 36, height: 36 }}>
                <MdQuiz className="text-white text-lg" />
              </div>
              <span>Quiz</span>
            </div>
            <MdChevronRight className="text-white text-lg animate-pulse" />
          </button>
        </Link>
      </div>

      {/* Learning Progress */}
      <div className="text-center mt-5 mb-4 animate-fadeInUp delay-500">
        <p className="text-black text-lg mb-1">Learning Progress</p>
        <div className="flex justify-center items-center text-yellow-400 text-xl mb-1 space-x-1">
          <FaStar className="animate-bounce-slow" />
          <FaStar className="animate-bounce-slow delay-150" />
          <FaStar className="animate-bounce-slow delay-300" />
          <FaRegStar />
        </div>
        <p className="text-black text-sm">3 of 4 activities completed</p>
      </div>

      {/* Encouragement box */}
      <div className="bg-blue-600 rounded-lg p-4 max-w-md w-full mt-5 text-xs text-white leading-tight animate-fadeInUp delay-700">
        <div className="flex items-start space-x-2">
          <FaSmile className="text-white mt-1 animate-spin-slow" />
          <p>
            Great learning kiddo!!!!! <br />
            Keep exploring and having fun......... <br />
            Keep making more progress,,,,,,,,
          </p>
        </div>
      </div>

      {/* Animations in same file */}
      <style>
        {`
          @keyframes fadeIn { 
            from { opacity: 0; } 
            to { opacity: 1; } 
          }
          @keyframes fadeInUp { 
            from { opacity: 0; transform: translateY(20px); } 
            to { opacity: 1; transform: translateY(0); } 
          }
          @keyframes bounceSlow { 
            0%, 100% { transform: translateY(0); } 
            50% { transform: translateY(-5px); } 
          }
          @keyframes spinSlow { 
            from { transform: rotate(0deg); } 
            to { transform: rotate(360deg); } 
          }

          .animate-spin-default { animation: spin 2s linear infinite; }
          .animate-fadeIn { animation: fadeIn 0.5s ease-in-out; }
          .animate-fadeInUp { animation: fadeInUp 0.5s ease-in-out forwards; }
          .animate-bounce-slow { animation: bounceSlow 1s infinite; }
          .animate-spin-slow { animation: spinSlow 1s linear infinite; }
          .animate-stagger { animation: fadeInUp 0.8s ease-in-out forwards; opacity: 0; }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-700 { animation-delay: 0.7s; }
        `}
      </style>
    </div>
  );
};

export default LearningAlphabet;
