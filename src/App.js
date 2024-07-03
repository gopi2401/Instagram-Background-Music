import React, { useState } from 'react';
import './App.css';
import Popup from './Popup';
import AudioPlayer from './AudioPlayer';
const songs = [
  { alt: '🔫', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f52b.png', title: "First Person Shooter", artist: "Drake", file_name: 'Drake - First Person Shooter (Instrumental) feat. J. Cole.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '💸', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f4b8.png', title: "Million Dollar Baby", artist: "Tommy Richman", file_name: 'Tommy Richman - Million Dollar Baby [Instrumental].mp3', vibe: ["Hard", "Engaging"] },
  { alt: '💰', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f4b0.png', title: "Money So Big", artist: "Yeat", file_name: 'Yeat - Money So Big Instrumental.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🧛', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f9db.png', title: "Vampire Heart", artist: "", file_name: 'vampire heart.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🛸', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f6f8.png', title: "Space Cadet", artist: "Metro Boomin", file_name: 'Metro Boomin - Space Cadet (Instrumental).mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🔥', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f525.png', title: "Like That", artist: "Metro Boomin, Future", file_name: 'Like That - Metro Boomin, Future.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🔊', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f50a.png', title: "Surround Sound", artist: "J.I.D", file_name: 'J.I.D - Surround Sound (feat. 21 Savage & Baby Tate).mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🏴‍☠️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f3f4-200d-2620-fe0f.png', title: "Yale", artist: "Ken Carson", file_name: 'ken car$on - yale (instrumental).mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🚶', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f6b6.png', title: "Walk Em Down", artist: "Metro Boomin", file_name: "Metro Boomin - Walk Em Down (Don't Kill Civilians) [Instrumental].mp3", vibe: ["Hard", "Engaging"] },
  { alt: '🌃', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f303.png', title: "Another Late Night", artist: "Drake", file_name: 'Drake - Another Late Night ft. Lil Yachty.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '💘', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f498.png', title: "Heart On My Sleeve", artist: "Al Drake", file_name: 'DRAKE - HEART ON MY SLEEVE FT. THE WEEKND (OFFICIAL INSTRUMENTAL)  DRAKE AI.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '💀', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f480.png', title: "Rapp Snitch Knishes", artist: "MF Doom", file_name: 'MF Doom - Rapp Snitch Knishes [Instrumental].mp3', vibe: ["Chill", "Engaging"] },
  { alt: '🗣️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f5e3-fe0f.png', title: "Tell Em (slowed + reverb)", artist: "Cochise", file_name: 'Cochise - Tell Em (Instrumental Remix  slowed  reverb).mp3', vibe: ["Chill", "Engaging"] },
  { alt: '☔', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/2614.png', title: "Swag Overload", artist: "Ken Carson", file_name: 'Ken Carson  Swag Overload [Closest Instrumental] (Prod. By Lucian & Jonah Abraham).mp3', vibe: ["Chill", "Engaging"] },
  { alt: '✅', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/2705.png', title: "Bigger Than Everything", artist: "Yeat", file_name: 'Yeat - bigger than everything (INSTRUMENTAL) Prod.BNYX.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '✈️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/2708-fe0f.png', title: "Private Jet", artist: "D Savage", file_name: 'd savage private jet instrumental (no synth).mp3', vibe: ["Chill", "Engaging"] },
  { alt: '☁️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/2601-fe0f.png', title: "Low Key Gliding", artist: "Hal Walker", file_name: 'Hal Walker - Low Key Gliding  (K08beatz remix).mp3', vibe: ["Chill", "Engaging"] },
  { alt: '🍏', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f34f.png', title: "Hell N Back", artist: "Bakar", file_name: 'Bakar - Hell N Back (Instrumental).mp3', vibe: ["Chill", "Engaging"] },
  { alt: '❤️‍🔥', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/2764-fe0f-200d-1f525.png', title: "In Ha Mood", artist: "Ice Spice", file_name: 'Ice Spice - In Ha Mood (Instrumental).mp3', vibe: ["GirlyPop", "Engaging"] },
  { alt: '🏠', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f3e0.png', title: "HOME (slowed + reverb)", artist: "resonance", file_name: 'HOME  resonance (432 hz) (slowed  reverb).mp3', vibe: ["Emotional", "Inspirational"] },
  { alt: '😢', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f622.png', title: "Another Love", artist: "Tom Odell", file_name: 'tom odell - another love (slowed down).mp3', vibe: ["Emotional"] },
  { alt: '🚀', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f680.png', title: "1901", artist: "Phoenix", file_name: 'Phoenix - 1901 (Instrumental) HQ.mp3', vibe: ["Inspirational"] },
  { alt: '🌒', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f312.png', title: "After Hours (slowed + reverb)", artist: "The Weeknd", file_name: 'AFTER HOURS INSTRUMENTAL (Slowed Reverb).mp3', vibe: ["Inspirational"] },
  { alt: '🧠', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f9e0.png', title: "Memory Reboot", artist: "VØJ, Narvent", file_name: 'VØJ, Narvent - Memory Reboot.mp3', vibe: ["Inspirational"] },
  { alt: '💪', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f4aa.png', title: "Righteous", artist: "Mo Beats", file_name: 'Mo Beats - Righteous (pepe lore song).mp3', vibe: ["Inspirational"] },
  { alt: '💋', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f48b.png', title: "plage coquillage (kiss song) best part only", artist: "", file_name: 'plage coquillage (kiss song ) best part only.mp3', vibe: ["Thought-provoking", "Inspirational"] },
  { alt: '🎷', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f3b7.png', title: "Echo Sax End", artist: "", file_name: 'Echo Sax End.mp3', vibe: ["Thought-provoking", "Inspirational"] },
  { alt: '🧪', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f9ea.png', title: "Test & Recognize", artist: "Flume", file_name: 'Seekae - Test & Recognise (Flume Re-Work).mp3', vibe: ["Thought-provoking", "Inspirational"] },
  { alt: '🐉', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f409.png', title: "Dragonfly", artist: "Dana and Alden", file_name: 'the most beautiful outro (Dragonfly by Dana and Alden).mp3', vibe: ["Thought-provoking", "Inspirational"] },
  { alt: '🦯', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f9af.png', title: "Mr. Blindbandit - Suspense, Horror, Piano and M", artist: "Mr. Blindbandit", file_name: 'Suspense, Horror, Piano and Music Box.mp3', vibe: ["Thought-provoking", "Suspense"] },
  { alt: '👥', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f465.png', title: "i was only temporary - my head is empty", artist: "", file_name: 'i was only temporary.mp3', vibe: ["Thought-provoking", "Suspense"] },
  { alt: '🌠', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f320.png', title: "Øfdream - Thelema", artist: "Øfdream", file_name: 'Øfdream - Thelema.mp3', vibe: ["Thought-provoking"] },
  { alt: '🇫🇷', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f1eb-1f1f7.png', title: "Else - Paris", artist: "Else", file_name: 'Else - Paris.mp3', vibe: ["Thought-provoking"] },
  { alt: '💡', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f4a1.png', title: "Luminary", artist: "Joel Sunny", file_name: 'joel sunny - luminary [original song] - official audio.mp3', vibe: ["Thought-provoking"] },
  { alt: '🌆', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f306.png', title: "Blade Runner 2049 - Synthwave Goose", artist: "Synthwave Goose", file_name: 'synthwave goose - blade runner 2049.mp3', vibe: ["Thought-provoking"] },
  { alt: '👻', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f47b.png', title: "The Lost Soul Down (Slowed & Reverb)", artist: "", file_name: 'The Lost Soul Down (Slowed & Reverb).mp3', vibe: ["Thought-provoking", "Sigma"] },
  { alt: '📞', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f4de.png', title: "Call me (Slowed)", artist: "", file_name: 'Call Me (Slowed).mp3', vibe: ["Sigma"] },
  { alt: '🌑', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f311.png', title: "After Dark", artist: "Mr.Kitty", file_name: 'Mr.Kitty - After Dark.mp3', vibe: ["Sigma"] },
  { alt: '🩸', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1fa78.png', title: "Bloody Mary Remix", artist: "", file_name: 'Bloody Mary (Remix).mp3', vibe: ["Sigma"] },
  { alt: '🏜️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f3dc-fe0f.png', title: "Sahara", artist: "Hensonn", file_name: 'Hensonn-Sahara.mp3', vibe: ["Sigma"] },
  { alt: '🌀', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f300.png', title: "particles (slowed)", artist: "villiam lane", file_name: 'villiam lane - particles (slowed).mp3', vibe: ["Sigma"] },
  { alt: '🦋', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f98b.png', title: "METAMORPHOSIS", artist: "Interworld", file_name: 'METAMORPHOSIS.mp3', vibe: ["Phonk"] },
  { alt: 'Page_icon', emojis_url: 'https://hail-bakery-d94.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff69b3bf2-7d6f-4d02-af5b-b6f6fbb15252%2Ffe4985e9-9f50-4fa9-af5f-c83f90d660e6%2Fraf_360x360_075_t_fafafa_ca443f4786-removebg-preview.png?table=block&id=407e29c6-d0d7-43a0-8a98-ecfde58b33fa&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&width=250&userId=&cache=v2', title: "GigaChad Theme", artist: "g3ox_em", file_name: 'g3oxem - GigaChad Theme (Phonk House Version).mp3', vibe: ["Phonk"] },
  { alt: '🌌', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f30c.png', title: "Dream Space", artist: "DVRST", file_name: 'DVRST - Dream Space.mp3', vibe: ["Phonk"] },
  { alt: '🔮', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f52e.png', title: "ESSENCE", artist: "Casper", file_name: 'ESSENCE.mp3', vibe: ["Phonk"] },
  { alt: '👁️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f441-fe0f.png', title: "Close Eyes (slowed + reverb)", artist: "DVRST", file_name: 'DVRST - Close Eyes (Slowed  Reverb).mp3', vibe: ["Phonk"] },
  { alt: '🪦', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1faa6.png', title: "Suicide Year", artist: "weedmane", file_name: 'WEEDMANE x Suicideyear SUICIDE YEAR.mp3', vibe: ["Phonk"] },
  { alt: '🏠', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f3e0.png', title: "Money is for the Rent - Not For The Soul", artist: "Mr. Carmack", file_name: 'Mr. Carmack - MONEY IS FOR RENT - NOT FOR THE SOUL.mp3', vibe: ["idek i just think this is sick"] },
];

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className="min-h-screen bg-darkBackground text-white">
      <div className='w-full h-52 overflow-hidden '>
        <img alt='header' className='object-cover' src='./image.jpg'></img>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold mb-4">Instagram Background Music Pack (1)</h1>
        <div className="overflow-x-auto mx-auto w-3/4">
          <table className="min-w-full mt-5 text-sm border-gray-700">
            <thead>
              <tr>
                <th className="border-b border-gray-700 py-1 px-2"><div className='flex items-center gap-1'><div className="w-5 h-5 scale-120 bg-white bg-opacity-50 custom-song"></div><p>Song</p></div></th>
                {/* <th className="px-4 py-2 border-b border-gray-700">Artist</th> */}
                <th className="border-b border-gray-700 py-1 px-2"><div className='flex items-center gap-1'><div className="w-5 h-5 scale-120 bg-white bg-opacity-50 custom-download"></div><p>Download</p></div></th>
                <th className="border-b border-gray-700 py-1 px-2"><div className='flex items-center gap-1'><div className="w-5 h-5 scale-120 bg-white bg-opacity-50 custom-vibe"></div><p>Vibe</p></div></th>
                {/* <th className="px-4 py-2 border-b border-gray-700"></th> */}
              </tr>
            </thead>
            <tbody>
              {songs.map((song, index) => (
                <tr key={index}>
                  <td className="px-2 py-1 border-b border-r border-gray-700"> <div className=' flex items-center justify-between'><div className='flex gap-1'><img className='w-4 h-4' alt={song.alt} aria-label={song.alt} src={song.emojis_url} ></img><div onClick={() => { setPopupData(song); openPopup(); }}>{song.title} {song.artist ? '- ' + song.artist : null}</div> </div><AudioPlayer url={'https://raw.githubusercontent.com/gopi2401/Instagram-Background-Music/music/' + song.file_name} /></div></td>
                  {/* <td className="px-4 py-2 border-b border-gray-700">{song.artist}</td> */}
                  {/* <div class="flex flex-wrap gap-x-2 gap-y-1.5">

                  </div> */}

                  < td className="px-2 py-1 border-b border-r border-gray-700" > <div className='flex w-28'><a download={song.song_url} target='_blank' rel="noreferrer" href={song.song_url} className="px-1 leading-6 rounded bg-white bg-opacity-10 cursor-zoom-in whitespace-nowrap overflow-hidden text-ellipsis">{song.file_name}</a></div></td>
                  <td className={`px-2 py-1 border-b border-gray-700 `}><div className='flex gap-2'>{song.vibe.map((vibe, index) => (<span className={`rounded px-1 whitespace-nowrap overflow-hidden text-ellipsis text-white/80 ${getVibeClass(vibe)}`} >{vibe}</span>))}</div></td>
                  {/* <td className="px-4 py-2 border-b border-gray-700"></td> */}
                </tr>
              ))}
            </tbody>
          </table>
          {/* <button onClick={openPopup}>Open Popup</button> */}
          <Popup isOpen={isPopupOpen} onClose={closePopup} song={popupData} />
        </div>
      </div >
    </div >
  );
};

export default App;

export const getVibeClass = (vibe) => {
  switch (vibe) {
    case 'Hard':
      return 'bg-[#6e3630]'
    case 'Engaging':
      return 'bg-[#89632a]';
    case 'Emotional':
      return 'bg-[#492f64]';
    case 'Thought-provoking':
      return 'bg-[#5a5a5a]';
    case 'Chill':
      return 'bg-[#28456c]';
    case 'Phonk':
      return 'bg-[#69314c]';
    case 'GirlyPop':
      return 'bg-[#69314c]';
    case 'Inspirational':
      return 'bg-white/30';
    default:
      return 'bg-white/10';
  }
};