// import React, { useEffect, useRef, useState } from "react";

// const BackgroundMusic = ({ isMuted }) => {
//     const audioRef = useRef(null);

//     useEffect(() => {
//         const audio = audioRef.current;
//         if (!audio) return;

//         // Play on first user interaction if not muted
//         const handleUserInteraction = () => {
//             if (!isMuted) {
//                 audio.play().catch(() => { }); // catch autoplay errors
//             }
//             window.removeEventListener("click", handleUserInteraction);
//         };

//         window.addEventListener("click", handleUserInteraction);

//         return () => window.removeEventListener("click", handleUserInteraction);
//     }, [isMuted]);

//     useEffect(() => {
//         if (!audioRef.current) return;
//         audioRef.current.muted = isMuted; // toggle mute
//         if (!isMuted) audioRef.current.play().catch(() => { });
//     }, [isMuted]);

//     return (
//         <audio ref={audioRef} src="/sounds/theme.mp3" loop autoPlay />
//     );
// };

// export default BackgroundMusic;

















import React, { useEffect, useRef } from "react";

const BackgroundMusic = ({ isMuted }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Autoplay on first user interaction if muted is false
        const handleUserInteraction = () => {
            if (!isMuted) {
                audio.play().catch(() => { }); // catch autoplay errors
            }
            window.removeEventListener("click", handleUserInteraction);
        };
        window.addEventListener("click", handleUserInteraction);

        return () => window.removeEventListener("click", handleUserInteraction);
    }, [isMuted]);

    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.muted = isMuted;
        if (!isMuted) audioRef.current.play().catch(() => { });
    }, [isMuted]);

    return <audio ref={audioRef} src="/sounds/theme.mp3" loop autoPlay />;
};

export default BackgroundMusic;
