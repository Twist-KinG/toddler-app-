import React from "react";
import { FaMusic, FaMobileAlt, FaAdjust, FaSave, FaSyncAlt } from "react-icons/fa"; // Importing React Icons

const Settings = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-start pt-16">
      <div className="w-[320px] h-[640px] border-8 border-black rounded-[48px] relative flex flex-col items-center bg-white">
        <img
          alt="Toddler for Learning logo with colorful text and small stars"
          className="mt-6"
          height="48"
          src="https://storage.googleapis.com/a1aa/image/df6de13d-3f5b-4532-88a2-544090422f2e.jpg"
          width="48"
        />
        <h1 className="mt-2 text-black text-[28px]">Settings</h1>
        <div className="mt-6 bg-blue-300 bg-opacity-50 rounded-xl w-[280px] p-6 flex flex-col gap-6">
          <label className="flex justify-between items-center text-blue-700 text-[20px]" htmlFor="music">
            <span>
              <FaMusic className="mr-2" />
              Music
            </span>
            <input
              className="toggle-checkbox w-12 h-6 rounded-full bg-blue-700 relative appearance-none cursor-pointer"
              id="music"
              type="checkbox"
            />
          </label>
          <label className="flex justify-between items-center text-blue-700 text-[20px]" htmlFor="vibration">
            <span>
              <FaMobileAlt className="mr-2" />
              Vibration
            </span>
            <input
              className="toggle-checkbox w-12 h-6 rounded-full bg-blue-700 relative appearance-none cursor-pointer"
              id="vibration"
              type="checkbox"
            />
          </label>
          <label className="flex justify-between items-center text-blue-700 text-[20px]" htmlFor="darkmode">
            <span>
              <FaAdjust className="mr-2" />
              Dark Mode
            </span>
            <input
              className="toggle-checkbox w-12 h-6 rounded-full bg-blue-700 relative appearance-none cursor-pointer"
              id="darkmode"
              type="checkbox"
            />
          </label>
          <button className="mt-4 bg-blue-400 bg-opacity-50 text-white text-[16px] rounded-md py-2 px-4 flex justify-center items-center gap-2 cursor-not-allowed select-none" disabled>
            Save Progress
            <FaSave />
          </button>
          <button className="mt-2 bg-blue-400 bg-opacity-50 text-white text-[16px] rounded-md py-2 px-4 flex justify-center items-center gap-2 cursor-not-allowed select-none" disabled>
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
