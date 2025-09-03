import React from "react";
import { Link } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import logo from "../assets/img/Toodler.png";
import image from "../assets/img/img.png";

const stories = [
  { id: 1, title: "Story 1", author: "Author 1", imgSrc: image },
  { id: 2, title: "Story 2", author: "Author 2", imgSrc: image },
  { id: 3, title: "Story 3", author: "Author 3", imgSrc: image },
  { id: 4, title: "Story 4", author: "Author 4", imgSrc: image },
  { id: 5, title: "Story 5", author: "Author 5", imgSrc: image },
  { id: 6, title: "Story 6", author: "Author 6", imgSrc: image },
];

const Story = () => {
  return (
    <div className="bg-white min-h-screen max-w-md flex flex-col items-center pt-8 px-6 font-indie relative animate-fadeIn">

      {/* Back Button */}
      <Link to="/">
        <button className="absolute top-4 left-4 p-2 bg-purple-600 rounded-full">
          <MdChevronLeft className="text-white text-2xl" />
        </button>
      </Link>

      {/* Logo */}
      <img
        src={logo}
        alt="Toddler Fun Learning logo"
        className="w-30 h-30 mb-1 animate-bounce-slow"
        width={60}
        height={60}
      />

      {/* Title */}
      <h1 className="text-purple-600 text-5xl leading-tight mb-0 animate-fadeInUp">Story</h1>
      <p className="text-purple-600 text-3xl mb-6 animate-fadeInUp delay-200">Fun Reading</p>

      {/* Stories Grid */}
      <div className="grid grid-cols-2 gap-2 w-full mt-10">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`bg-purple-600 rounded-xl p-3 flex flex-col mb-5 animate-stagger delay-${100 + index * 100}`}
            style={{ width: "180px", height: "300px" }}
          >
            <img
              alt={`Image for ${story.title}`}
              className="rounded-md mb-3 animate-bounce-slow"
              height="200"
              src={story.imgSrc}
              width="180"
            />
            <p className="text-white text-xl animate-fadeInUp">{story.title}</p>
            <p className="text-white text-s animate-fadeInUp delay-100">{story.author}</p>
          </div>
        ))}
      </div>

      {/* Encouragement box */}
      <div className="bg-blue-600 rounded-lg p-4 max-w-md w-full mt-5 text-xs text-white leading-tight animate-fadeInUp delay-700">
        <div className="flex items-start space-x-2">
          <FaSmile className="text-white mt-1 animate-spin-slow" />
          <p>
            📖 Amazing reading progress! <br />
            🌟 Keep enjoying stories and discovering new adventures. <br />
            🚀 Every story you read grows your imagination!
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Story;
