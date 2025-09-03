import React from "react";
import { Link } from "react-router-dom";
import { FaSortAlphaDown, FaClone, FaStar, FaRegStar, FaSmile, FaCog } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { MdChevronRight, MdQuiz } from "react-icons/md";
import logo from "../assets/img/Toodler.png";

const Home = () => {
  return (
    <div className="bg-white min-h-screen max-w-md flex flex-col items-center px-6 pt-6 pb-10 font-indie relative animate-fadeIn">

      {/* Settings Button */}
      <Link to="/settings">
        <button className="absolute top-4 right-4 p-2 bg-purple-600 rounded-full text-white animate-fadeIn">
          <FaCog className="text-lg animate-spin-default" />
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
      <h1 className="text-purple-600 text-5xl leading-tight mb-0 animate-fadeInUp">Toddler</h1>
      <p className="text-purple-600 text-3xl mb-6 animate-fadeInUp delay-200">Fun Learning</p>

      {/* Buttons container */}
      <div className="w-full max-w-md space-y-4 mt-15 mb-8">
        {/* Learn Alphabets */}
        <Link to="/learnalphabets">
          <button
            type="button"
            className="flex items-center justify-between bg-purple-600 rounded-lg py-4 px-5 w-full text-white text-lg animate-stagger delay-100"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-purple-500 rounded-md flex items-center justify-center" style={{ width: 36, height: 36 }}>
                <FaSortAlphaDown className="text-white text-lg" />
              </div>
              <span>Learn Alphabets & Numbers</span>
            </div>
            <MdChevronRight className="text-white text-lg animate-pulse" />
          </button>
        </Link>

        {/* Picture Matching */}
        <Link to="/picturelearning">
          <button
            type="button"
            className="flex items-center justify-between bg-red-600 rounded-lg py-4 px-5 w-full text-white text-lg mt-5 animate-stagger delay-200"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-red-500 p-3 rounded-md flex items-center justify-center" style={{ width: 36, height: 36 }}>
                <FaClone className="text-white text-lg" />
              </div>
              <span>Picture Learning</span>
            </div>
            <MdChevronRight className="text-white text-lg animate-pulse" />
          </button>
        </Link>

        {/* Animal Sounds */}
        <Link to="/sounds">
          <button
            type="button"
            className="flex items-center justify-between bg-orange-600 rounded-lg py-4 px-5 w-full text-white text-lg mt-5 animate-stagger delay-300"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 p-3 rounded-md flex items-center justify-center" style={{ width: 36, height: 36 }}>
                <FaVolumeHigh className="text-white text-lg" />
              </div>
              <span>Sounds</span>
            </div>
            <MdChevronRight className="text-white text-lg animate-pulse" />
          </button>
        </Link>

        {/* Story */}
        <Link to="/Story">
          <button
            type="button"
            className="flex items-center justify-between bg-green-600 rounded-lg py-4 px-5 w-full text-white text-lg mt-5 animate-stagger delay-400"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-3 rounded-md flex items-center justify-center" style={{ width: 36, height: 36 }}>
                <MdQuiz className="text-white text-lg" />
              </div>
              <span>Story</span>
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
    </div>
  );
};

export default Home;
