// Animals.jsx
import React from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdChevronLeft } from "react-icons/md";
import logo from "../../assets/img/Toodler.png"; // Importing the local logo image
import image from "../../assets/img/plc.png"; // Importing the local logo image

const Animals = () => {
  // Define an array of sound objects
  const sounds = [
    {
      key: 'sound1',
      url: 'https://actions.google.com/sounds/v1/alarms/beep_short.ogg',
      img: image, // Placeholder image for sound 1
    },
    {
      key: 'sound2',
      url: 'https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg',
      img: image, // Placeholder image for sound 2
    },
    {
      key: 'sound3',
      url: 'https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg',
      img: image, // Placeholder image for sound 3
    },
    {
      key: 'sound4',
      url: 'https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg',
      img: image, // Placeholder image for sound 4
    },
    {
      key: 'sound5',
      url: 'https://actions.google.com/sounds/v1/alarms/medium_bell_ring.ogg',
      img: image, // Placeholder image for sound 5
    },
    {
      key: 'sound6',
      url: 'https://actions.google.com/sounds/v1/alarms/short_circuit.ogg',
      img: image, // Placeholder image for sound 6
    },
  ];

  const playSound = (soundUrl) => {
    // Create a new Audio object for the clicked sound
    const audio = new Audio(soundUrl);
    // Play the clicked sound
    audio.play();
  };

  return (
    <div className="bg-white min-h-screen max-w-md flex flex-col items-center pt-8 px-6 font-indie relative">
      <Link to="/sounds">
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
      <h1 className="text-purple-600 text-5xl leading-tight mb-0">Animals</h1>
      <p className="text-purple-600 text-3xl mb-6">Sounds</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-6">
        {sounds.map((sound, index) => (
          <button
            key={sound.key}
            aria-label={`Play ${sound.key}`}
            className="focus:outline-none"
            onClick={() => playSound(sound.url)}
          >
            <img
              alt={`Sound ${index + 1} image placeholder`}
              className={`border-8 rounded-md ${index % 2 === 0 ? 'border-[#8ca4db]' : 'border-[#ff6f61]'}`}
              height="180"
              src={sound.img} // Use the image from the sound object
              width="180"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Animals;
