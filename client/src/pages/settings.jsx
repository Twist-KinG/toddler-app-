import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaMusic, FaMobileAlt, FaAdjust, FaSave, FaSyncAlt } from "react-icons/fa"; // Importing React Icons
import { MdChevronLeft } from "react-icons/md"; // Importing Chevron Left Icon
import logo from "../assets/img/Toodler.png";

const Settings = () => {
    return (
        <div className="bg-white min-h-screen max-w-md flex justify-center items-start pt-16 relative ">
            {/* Return to Home Button */}
            <Link to="/">
                <button className="absolute top-4 left-4 p-2 bg-blue-300 rounded-full hover:bg-blue-400 transition">
                    <MdChevronLeft className="text-white text-2xl" />
                </button>
            </Link>
            <div className="flex flex-col items-center w-[350px]">
                <img
                    src={logo}
                    alt="Toddler for Learning logo with colorful text and small stars"
                    className="w-30 h-30 mb-1"
                    height="60"
                    width="60"
                />
                <h1 className="text-black text-5xl mt-2 mb-15">Settings</h1>
                <div className="bg-blue-300 bg-opacity-50 rounded-xl w-full p-6 flex flex-col gap-6">
                    <label className="flex justify-between items-center text-white text-[30px] w-full" htmlFor="music">
                        <span className="flex items-center">
                            <FaMusic className="mr-2" />
                            Music
                        </span>
                        <input
                            className="toggle-checkbox w-12 h-6 rounded-full bg-blue-700 relative appearance-none cursor-pointer"
                            id="music"
                            type="checkbox"
                        />
                    </label>
                    <label className="flex justify-between items-center text-white text-[30px] w-full" htmlFor="vibration">
                        <span className="flex items-center">
                            <FaMobileAlt className="mr-2" />
                            Vibration
                        </span>
                        <input
                            className="toggle-checkbox w-12 h-6 rounded-full bg-blue-700 relative appearance-none cursor-pointer"
                            id="vibration"
                            type="checkbox"
                        />
                    </label>
                    <label className="flex justify-between items-center text-white text-[30px] w-full" htmlFor="darkmode">
                        <span className="flex items-center">
                            <FaAdjust className="mr-2" />
                            Dark Mode
                        </span>
                        <input
                            className="toggle-checkbox w-12 h-6 rounded-full bg-blue-700 relative appearance-none cursor-pointer"
                            id="darkmode"
                            type="checkbox"
                        />
                    </label>
                    <button className="mt-4 bg-blue-400 bg-opacity-50 text-white text-[20px] rounded-md py-2 px-4 flex justify-center items-center gap-2 cursor-not-allowed select-none w-full" disabled>
                        Save Progress
                        <FaSave />
                    </button>
                    <button className="mt-2 bg-blue-400 bg-opacity-50 text-white text-[20px] rounded-md py-2 px-4 flex justify-center items-center gap-2 cursor-not-allowed select-none w-full" disabled>
                        Reset Progress
                        <FaSyncAlt />
                    </button>
                </div>
            </div>
            <style>
                {`
          /* Custom toggle styling to replicate the toggle switch */
          input[type='checkbox'].toggle-checkbox {
            background-color: #5a6ea0;
            position: relative;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: none;
            transition: background-color 0.3s ease;
          }
          input[type='checkbox'].toggle-checkbox::before {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 20px;
            height: 20px;
            background: #a3b1d1;
            border-radius: 50%;
            transition: transform 0.3s ease;
          }
          input[type='checkbox'].toggle-checkbox:checked {
            background-color: #3b4a7a;
          }
          input[type='checkbox'].toggle-checkbox:checked::before {
            transform: translateX(24px);
            background: #d1d9f0;
          }
        `}
            </style>
        </div>
    );
};

export default Settings;
