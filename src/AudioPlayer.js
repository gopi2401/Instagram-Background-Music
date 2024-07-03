import React, { useRef, useState, useEffect } from 'react';

const AudioPlayer = ({ url }) => {
    const audioRef = useRef(null);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const handleLoadedMetadata = () => {
            if (audioRef.current) {
                setDuration(audioRef.current.duration);
            }
        };

        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        return () => {
            if (audioElement) {
                audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, [url]);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="flex items-center space-x-4">
            <button
                onClick={handlePlay}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
            >
                Play
            </button>
            <button
                onClick={handlePause}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
                Pause
            </button>
            <audio ref={audioRef} src={url} />
            <span>{formatTime(duration)}</span>
        </div>
    );
};

export default AudioPlayer;