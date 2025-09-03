import React from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa"; // Correct icons

const MusicToggle = ({ isMuted, toggleMute }) => {
    return (
        <button
            onClick={toggleMute}
            className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-500 transition flex items-center justify-center"
            title={isMuted ? "Unmute Music" : "Mute Music"}
        >
            {isMuted ? <FaVolumeMute size={24} /> : <FaMusic size={24} />}
        </button>
    );
};

export default MusicToggle;
