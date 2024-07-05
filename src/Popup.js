import React from 'react';
import './Popup.css';
import { getVibeClass } from "./App"

const Popup = ({ isOpen, onClose, song }) => {
    if (!isOpen) return null;
    return (
        <>
            {/* <head><title>{song?.title}</title></head> */}
            <div className="popup-overlay">
                <div className="popup-content bg-darkBackground">
                    <button className="popup-close text-black" onClick={onClose}>×</button>
                    <div className="max-w-md md:max-w-2xl w-1/2">
                        <div className="md:flex">
                            <div className="md:shrink-0">
                                <img className="h-12 w-12 mx-auto mt-4" alt={song?.alt} src={song?.emojis_url} />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{song?.title}</div>
                                <div className="mt-2 flex items-center space-x-4">
                                    <div className='flex items-center gap-1'><div className="w-5 h-5 scale-120 bg-white bg-opacity-50 custom-vibe"></div><p>Vibe</p></div>
                                    <div className='flex gap-2'>{song.vibe.map((vibe, index) => (<span className={`rounded px-1 whitespace-nowrap overflow-hidden text-ellipsis text-white/80 ${getVibeClass(vibe)}`} >{vibe}</span>))}</div>
                                </div>
                                <div className="mt-4">
                                    <div className='flex items-center gap-1'><div className="w-5 h-5 scale-120 bg-white bg-opacity-50 custom-download"></div><p>Download</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
