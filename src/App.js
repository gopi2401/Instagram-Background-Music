import React from 'react';
import './App.css';

const songs = [
  { alt: '🔫', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f52b.png', title: "First Person Shooter", artist: "Drake", file_name: 'Drake - First Person Shooter (Instrumental) feat. J. Cole.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/21951ad6-5cb2-4474-b604-1658ad7488f4/Drake_-_First_Person_Shooter_(Instrumental)_feat._J._Cole.mp3?id=dc878f15-3794-4850-970c-5f826111a75b&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=RpK8UUwsL92mwnYJvZEcZu0KygWnUZY297YFUgeRn4I&downloadName=Drake+-+First+Person+Shooter+%28Instrumental%29+feat.+J.+Cole.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '💸', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f4b8.png', title: "Million Dollar Baby", artist: "Tommy Richman", file_name: 'Tommy Richman - Million Dollar Baby [Instrumental].mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/129b090e-b4de-451c-a99d-e142cc2dd2b8/Tommy_Richman_-_Million_Dollar_Baby_Instrumental.mp3?id=e131d627-e2f2-422f-942a-acf87b6547d1&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=l-kQ519RA9DK3P0mK_M2oYnh5Z7OM8f3u9gd1Stvv1Q&downloadName=Tommy+Richman+-+Million+Dollar+Baby+%5BInstrumental%5D.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '💰', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f4b0.png', title: "Money So Big", artist: "Yeat", file_name: 'Yeat - Money So Big Instrumental.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/65736be1-bd27-4043-89d4-7030a8319882/Yeat_-_Money_So_Big_Instrumental.mp3?id=9752c1f6-f13f-4660-8945-b90ac3eca5b2&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=bNHbzqyjmdgR1gcRGVA-386GO88AYNgBvGLyFjg4TK8&downloadName=Yeat+-+Money+So+Big+Instrumental.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🧛', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f9db.png', title: "Vampire Heart", artist: "", file_name: 'vampire heart.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/6d69197e-0895-4f9b-b445-bb679c542d2e/vampire_heart.mp3?id=5f4db630-11cc-4b07-ae7b-f38a82b18900&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=33r9beUHdJuxdoKcJ2fSPGoLKBnmi_avoQB3CApGzLI&downloadName=vampire+heart.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🛸', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f6f8.png', title: "Space Cadet", artist: "Metro Boomin", file_name: 'Metro Boomin - Space Cadet (Instrumental).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/1a5cc9b3-4843-40ef-bc35-a59c70c73a82/Metro_Boomin_-_Space_Cadet_(Instrumental).mp3?id=06b691bf-fa61-4836-a3fa-68eabce436c9&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=u_u4A5lUaDWrBKCbFzS09-N7klbD8KAJMGeNV5WR0QU&downloadName=Metro+Boomin+-+Space+Cadet+%28Instrumental%29.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🔥', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f525.png', title: "Like That", artist: "Metro Boomin, Future", file_name: 'Like That - Metro Boomin, Future.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/cb60ce10-5f13-4119-ba41-bcd1aa2e79ca/Like_That_-_Metro_Boomin_Future.mp3?id=8335afbc-a5fe-4798-95e5-c4eb6ced0052&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=-Lep0Xki7tcgVd6LOiFxFM_Jk-5XKGOuFJW0n1MuIi0&downloadName=Like+That+-+Metro+Boomin%2C+Future.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🔊', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f50a.png', title: "Surround Sound", artist: "J.I.D", file_name: 'J.I.D - Surround Sound (feat. 21 Savage & Baby Tate).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/fa596d43-4a3c-4bff-abe3-b32903e9316b/J.I.D_-_Surround_Sound_(feat._21_Savage__Baby_Tate).mp3?id=a0e62efc-9dd4-4042-8dca-2d02968a7251&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=QHzenkz4yN2rFCqX0WQujhZcZ8xeImXVl8Eq4goqI80&downloadName=J.I.D+-+Surround+Sound+%28feat.+21+Savage+%26+Baby+Tate%29.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🏴‍☠️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f3f4-200d-2620-fe0f.png', title: "Yale", artist: "Ken Carson", file_name: 'ken car$on - yale (instrumental).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/be6a1068-e870-4ba6-8754-76d04f39c8c9/ken_caron_-_yale_(instrumental).mp3?id=c5c5206c-acfa-47e4-8bff-d763da8d167a&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=IsPm8k2RFzWsynr31L_P2YTVr4D8TeKyi48_vPuCthc&downloadName=ken+car%24on+-+yale+%28instrumental%29.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🚶', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f6b6.png', title: "Walk Em Down", artist: "Metro Boomin", file_name: "Metro Boomin - Walk Em Down (Don't Kill Civilians) [Instrumental].mp3", song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/1d026b85-ade5-4a10-93a1-4d678d9c7b33/Metro_Boomin_-_Walk_Em_Down_(Dont_Kill_Civilians)_Instrumental.mp3?id=439f89e7-bbc6-41b7-9aa6-7596e7607c27&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=gq4T1pTSGD3Zf0Kz0A2U5-SAbEQA2EqW-NCxbbFaZjw&downloadName=Metro+Boomin+-+Walk+Em+Down+%28Don%27t+Kill+Civilians%29+%5BInstrumental%5D.mp3', vibe: ["Hard", "Engaging"] },
  { alt: '🌃', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f303.png', title: "Another Late Night", artist: "Drake", file_name: 'Drake - Another Late Night ft. Lil Yachty.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/0991c9a5-d410-46ce-a2fb-ba245825f14f/Drake_-_Another_Late_Night_ft._Lil_Yachty_(Official_Instrumental).mp3?id=c044b06c-ef63-4a99-9a5e-9173a09bc513&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=W6vwU880uqPX6tGzVRjmuTNzySF-kC885Mp-ShfwaXk&downloadName=Drake+-+Another+Late+Night+ft.+Lil+Yachty.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '💘', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f498.png', title: "Heart On My Sleeve", artist: "Al Drake", file_name: 'DRAKE - HEART ON MY SLEEVE FT. THE WEEKND (OFFICIAL INSTRUMENTAL)  DRAKE AI.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/f2eee2a9-3f1c-4b89-ade2-c22b83aee095/DRAKE_-_HEART_ON_MY_SLEEVE_FT._THE_WEEKND_(OFFICIAL_INSTRUMENTAL)__DRAKE_AI.mp3?id=76f89fa7-17f9-4418-9540-b46714640a26&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=7n3qXqGO0qEeZcEUOxPPsmBkayU5n5lKd5BlDjQz0ZA&downloadName=DRAKE+-+HEART+ON+MY+SLEEVE+FT.+THE+WEEKND+%28OFFICIAL+INSTRUMENTAL%29++DRAKE+AI.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '💀', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f480.png', title: "Rapp Snitch Knishes", artist: "MF Doom", file_name: 'MF Doom - Rapp Snitch Knishes [Instrumental].mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/9b7ca763-72ad-4d45-a7d8-20958126b384/MF_Doom_-_Rapp_Snitch_Knishes_Instrumental.mp3?id=e8a11069-3cea-482e-9bb1-1f8cd9b90ea4&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=Gk6oxQ-72-_mq3tJY6fWoI6rUjwnzmQMKX3DBVt2j0o&downloadName=MF+Doom+-+Rapp+Snitch+Knishes+%5BInstrumental%5D.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '🗣️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f5e3-fe0f.png', title: "Tell Em (slowed + reverb)", artist: "Cochise", file_name: 'Cochise - Tell Em (Instrumental Remix  slowed  reverb).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/4b1e59b9-4b3e-4468-88df-e8b854f2de90/Cochise_-_Tell_Em_(Instrumental_Remix__slowed__reverb).mp3?id=9c37f508-440e-450d-a982-e88b74f5b327&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=BKRDycww6RABBGMc-UdsS3TUcpvfc85Ev0rx3QuHOec&downloadName=Cochise+-+Tell+Em+%28Instrumental+Remix++slowed++reverb%29.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '☔', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/2614.png', title: "Swag Overload", artist: "Ken Carson", file_name: 'Ken Carson  Swag Overload [Closest Instrumental] (Prod. By Lucian & Jonah Abraham).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/4b28f248-0311-4430-9f75-022055ccd0ca/Ken_Carson__Swag_Overload_Closest_Instrumental_(Prod._By_Lucian__Jonah_Abraham).mp3?id=b6c69bbf-669a-4111-acaf-5d305dfef09a&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=SUSTx21-ET2H7uDULLewpKEA5_ZOZEjIJC_bmDGbK6I&downloadName=Ken+Carson++Swag+Overload+%5BClosest+Instrumental%5D+%28Prod.+By+Lucian+%26+Jonah+Abraham%29.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '✅', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/2705.png', title: "Bigger Than Everything", artist: "Yeat", file_name: 'Yeat - bigger than everything (INSTRUMENTAL) Prod.BNYX.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/69857770-6b73-46b0-9ab2-9cbf72bae8a4/Yeat_-_bigger_than_everything_(INSTRUMENTAL)_Prod.BNYX.mp3?id=2a1fe2eb-f80b-4416-88bd-b6eb91945c31&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=mb7CIGpmF9mFAAOnfxR97jlk7M5vVwZGIQ6cHCkugXk&downloadName=Yeat+-+bigger+than+everything+%28INSTRUMENTAL%29+Prod.BNYX.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '✈️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/2708-fe0f.png', title: "Private Jet", artist: "D Savage", file_name: 'd savage private jet instrumental (no synth).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/49d4d322-75b3-4bbe-930b-5f6f792e1c82/d_savage_private_jet_instrumental_(no_synth).mp3?id=a9accc6e-37c8-4c44-aa0a-b99df470e35e&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=M114swsAAC9lf-esDpA8vqtJN1atpkwjDXZZHAO-D94&downloadName=d+savage+private+jet+instrumental+%28no+synth%29.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '☁️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/2601-fe0f.png', title: "Low Key Gliding", artist: "Hal Walker", file_name: 'Hal Walker - Low Key Gliding  (K08beatz remix).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/9191a364-efe6-46b8-a5a5-27d5072f7791/Hal_Walker_-_Low_Key_Gliding__(K08beatz_remix).mp3?id=4ee48e70-880d-4fcc-b118-c62e60ad2ede&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=pEGblSrUVjrxW5cbeR4bMh9615A05FS2ak2zaXy0Lq4&downloadName=Hal+Walker+-+Low+Key+Gliding++%28K08beatz+remix%29.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '🍏', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f34f.png', title: "Hell N Back", artist: "Bakar", file_name: 'Bakar - Hell N Back (Instrumental).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/467dec36-4699-4120-9905-421982de39ad/Bakar_-_Hell_N_Back_(Instrumental).mp3?id=2358b8ce-56e6-4b14-be1e-cea8c8141440&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=UIcKcN-dy9GLJuE7YmqarBR7J2Xr0m4nJG-Yti-SnCw&downloadName=Bakar+-+Hell+N+Back+%28Instrumental%29.mp3', vibe: ["Chill", "Engaging"] },
  { alt: '❤️‍🔥', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/2764-fe0f-200d-1f525.png', title: "In Ha Mood", artist: "Ice Spice", file_name: 'Ice Spice - In Ha Mood (Instrumental).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/3a39f319-ab99-48af-a917-5602db06b3c9/Ice_Spice_-_In_Ha_Mood_(Instrumental).mp3?id=c89b3b7f-7356-4a60-857f-b7a77b973e10&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=9zk0hYOuNYRCvT-rt6luEPt0oXuneR7U66y3qqe3Ur4&downloadName=Ice+Spice+-+In+Ha+Mood+%28Instrumental%29.mp3', vibe: ["GirlyPop", "Engaging"] },
  { alt: '🏠', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f3e0.png', title: "HOME (slowed + reverb)", artist: "resonance", file_name: 'HOME  resonance (432 hz) (slowed  reverb).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/ce924b8e-f4ec-45af-8283-6857f7390ad5/HOME__resonance_(432_hz)_(slowed__reverb).mp3?id=87ade752-20c9-4378-ae70-271a4b33a7c1&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=UETM6dNiUQwXPTUSMjtsT8bTxV-WfJqgNY3tYrqTOlY&downloadName=HOME++resonance+%28432+hz%29+%28slowed++reverb%29.mp3', vibe: ["Emotional", "Inspirational"] },
  { alt: '😢', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f622.png', title: "Another Love", artist: "Tom Odell", file_name: 'tom odell - another love (slowed down).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/6232df59-9c65-495e-b0d9-386d1f70bac3/tom_odell_-_another_love_(slowed_down).mp3?id=4ab294c3-43d8-41ea-8e82-50440ddf90f3&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=buqF2dEnirXwp-md6RQ80mIdhADQqonK7NsCZh6syzc&downloadName=tom+odell+-+another+love+%28slowed+down%29.mp3', vibe: ["Emotional"] },
  { alt: '🚀', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f680.png', title: "1901", artist: "Phoenix", file_name: 'Phoenix - 1901 (Instrumental) HQ.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/065156e5-586b-4a15-945f-e815c29e0b2a/Phoenix_-_1901_(Instrumental)_HQ.mp3?id=735c3f2a-4b8a-45eb-8494-ecc15df48749&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=xm-D338NH6QavojyxS-jj9QOIZaV74LnQGBaIzVlvGc&downloadName=Phoenix+-+1901+%28Instrumental%29+HQ.mp3', vibe: ["Inspirational"] },
  { alt: '🌒', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f312.png', title: "After Hours (slowed + reverb)", artist: "The Weeknd", file_name: 'AFTER HOURS INSTRUMENTAL (Slowed Reverb).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/5dfa4a09-9e26-490e-9867-9b0162679359/AFTER_HOURS_INSTRUMENTAL_(Slowed_Reverb).mp3?id=980b2d94-6493-4e58-90a4-6f7b65e325c5&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=IZA5XZsTR5n44WS7MI0cv73GmRBY00VQighSNX719t4&downloadName=AFTER+HOURS+INSTRUMENTAL+%28Slowed+Reverb%29.mp3', vibe: ["Inspirational"] },
  { alt: '🧠', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f9e0.png', title: "Memory Reboot", artist: "VØJ, Narvent", file_name: 'VØJ, Narvent - Memory Reboot.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/b3ea6b67-9adf-4e85-bd77-299b9ccedf8f/VJ_Narvent_-_Memory_Reboot.mp3?id=2d17f6a3-3912-4ad4-a973-616ab6c04c7f&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=ivAzIOwtmod4OdZmBQUvUF9l9YSIOL8Oo4K1KHWWecU&downloadName=V%C3%98J%2C+Narvent+-+Memory+Reboot.mp3', vibe: ["Inspirational"] },
  { alt: '💪', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f4aa.png', title: "Righteous", artist: "Mo Beats", file_name: 'Mo Beats - Righteous (pepe lore song).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/3d7459ad-fd0f-46d2-af69-e4ead278aabc/Mo_Beats_-_Righteous_(pepe_lore_song).mp3?id=6d6f55e1-76be-484e-a4d8-3f319ff17a06&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=eyDjvpQYWLvI9wJVtQmnN_2NBjuPJp5o-VA-roiljak&downloadName=Mo+Beats+-+Righteous+%28pepe+lore+song%29.mp3', vibe: ["Inspirational"] },
  { alt: '💋', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f48b.png', title: "plage coquillage (kiss song) best part only", artist: "", file_name: 'plage coquillage (kiss song ) best part only.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/41f26dfe-a672-44b0-9e19-6a60ee60a7e5/plage_coquillage_(kiss_song_)_best_part_only.mp3?id=2b4e4a62-143e-4928-b45c-cbcb4cd953b8&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=Qp4GP6225-j2w8Ic4Js4FaacvVXMxWYXFgcB8xxcDcw&downloadName=plage+coquillage+%28kiss+song+%29+best+part+only.mp3', vibe: ["Thought-provoking", "Inspirational"] },
  { alt: '🎷', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f3b7.png', title: "Echo Sax End", artist: "", file_name: 'Echo Sax End.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/85c92182-73a5-4d64-9e7a-b1f0e947d339/Echo_Sax_End.mp3?id=961d85f8-01ef-4dfa-8e3f-ad881fdbaaf3&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=ZA_l4lzcaU3G6HsBy-Ynh9BsYq7Ua8mCTBDWRtSanJg&downloadName=Echo+Sax+End.mp3', vibe: ["Thought-provoking", "Inspirational"] },
  { alt: '🧪', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f9ea.png', title: "Test & Recognize", artist: "Flume", file_name: 'Seekae - Test & Recognise (Flume Re-Work).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/e726caf8-a20c-41d9-9f7b-f6fe363a360c/Seekae_-_Test__Recognise_(Flume_Re-Work).mp3?id=ba955b50-0449-4700-8d1b-439ea58f4b8e&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=C5FCFmKyI3XKcY1AeY6DOy8tNq535NrgFOVLnaT3NIQ&downloadName=Seekae+-+Test+%26+Recognise+%28Flume+Re-Work%29.mp3', vibe: ["Thought-provoking", "Inspirational"] },
  { alt: '🐉', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f409.png', title: "Dragonfly", artist: "Dana and Alden", file_name: 'the most beautiful outro (Dragonfly by Dana and Alden).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/75087689-49e2-4b06-9a03-d78c4a7bc04a/the_most_beautiful_outro_(Dragonfly_by_Dana_and_Alden).mp3?id=c31ac220-7b57-4b8f-b369-4f64febbee79&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=wpIaUzovj1Z5wAZTDoqHczapAtFJI8drTJeHqH2w8jQ&downloadName=the+most+beautiful+outro+%28Dragonfly+by+Dana+and+Alden%29.mp3', vibe: ["Thought-provoking", "Inspirational"] },
  { alt: '🦯', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f9af.png', title: "Mr. Blindbandit - Suspense, Horror, Piano and M", artist: "Mr. Blindbandit", file_name: 'Suspense, Horror, Piano and Music Box.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/68d3c58b-e266-467d-8711-204c017a9095/Suspense_Horror_Piano_and_Music_Box.mp3?id=ea7c0793-719c-4d96-838e-32b9918e0476&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=XLknzIGPi6eZFT3qK7gIUSb-ube380obnUD0rpXAKGY&downloadName=Suspense%2C+Horror%2C+Piano+and+Music+Box.mp3', vibe: ["Thought-provoking", "Suspense"] },
  { alt: '👥', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f465.png', title: "i was only temporary - my head is empty", artist: "", file_name: 'i was only temporary.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/e961888e-0802-4327-b614-4477e139094a/i_was_only_temporary.mp3?id=14fcd819-7322-4bb8-a198-55267a147eb9&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=VnbSkpxCD-6n4M3rvtyefH-Euh4XOg-MYeDh_jMdsrE&downloadName=i+was+only+temporary.mp3', vibe: ["Thought-provoking", "Suspense"] },
  { alt: '🌠', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f320.png', title: "Øfdream - Thelema", artist: "Øfdream", file_name: 'Øfdream - Thelema.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/a9f7674d-9a8d-4150-baed-8a6860be33fc/fdream_-_Thelema.mp3?id=7ed388ec-3b53-47a5-82fb-729db3e590c0&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=PZTpeSkCz96eKx7PE8HZDKzzB1KnGrkL2Y5BvLU7o7o&downloadName=%C3%98fdream+-+Thelema.mp3', vibe: ["Thought-provoking"] },
  { alt: '🇫🇷', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f1eb-1f1f7.png', title: "Else - Paris", artist: "Else", file_name: 'Else - Paris.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/c7a421e1-1ad0-4271-b7ef-078843cdec72/Else_-_Paris.mp3?id=982b874d-9fc5-4b2f-98a1-c61a73aa0e6e&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=LTQGpQCoisg6_G1tdTiAQBmcwBLfU1bIx6Ir-1DKt5k&downloadName=Else+-+Paris.mp3', vibe: ["Thought-provoking"] },
  { alt: '💡', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f4a1.png', title: "Luminary", artist: "Joel Sunny", file_name: 'joel sunny - luminary [original song] - official audio.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/b25ac57f-19c4-457c-99e1-15e2ceb89851/joel_sunny_-_luminary_original_song_-_official_audio.mp3?id=5b5acada-f999-4181-bbc3-1e31f459067a&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719986400000&signature=t7LY_aQZQHWXnLUCuWLDm1Ouj-RVbgDAPZXxtk6p5JY&downloadName=joel+sunny+-+luminary+%5Boriginal+song%5D+-+official+audio.mp3', vibe: ["Thought-provoking"] },
  { alt: '🌆', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f306.png', title: "Blade Runner 2049 - Synthwave Goose", artist: "Synthwave Goose", file_name: 'synthwave goose - blade runner 2049.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/1c6466f0-c974-403a-8721-7c61d0dfa97b/synthwave_goose_-_blade_runner_2049.mp3?id=3bd50f0e-c153-41f9-9ce9-ec3f5d859ee6&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=d93XeHeu9EjwVEbqUw0e0nWCg35Oo0pZiFz4LoG-wAI&downloadName=synthwave+goose+-+blade+runner+2049.mp3', vibe: ["Thought-provoking"] },
  { alt: '👻', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f47b.png', title: "The Lost Soul Down (Slowed & Reverb)", artist: "", file_name: 'The Lost Soul Down (Slowed & Reverb).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/023dc3b5-ae6a-4f3f-b294-07406489af30/The_Lost_Soul_Down_(Slowed__Reverb).mp3?id=30750d38-28ae-4f61-93d4-5160fda608cb&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=T0q-JDWTZFeicCeqP3RqVQA_Q3mz2g5vjgb6IBYJ7eY&downloadName=The+Lost+Soul+Down+%28Slowed+%26+Reverb%29.mp3', vibe: ["Thought-provoking", "Sigma"] },
  { alt: '📞', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f4de.png', title: "Call me (Slowed)", artist: "", file_name: 'Call Me (Slowed).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/64e7f91a-000e-4dbb-ad3e-2b1b50fc836e/Call_Me_(Slowed).mp3?id=cffa4025-bb59-4fcd-9f88-a53b6b009eb5&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=r9DWU36Tkwo6-8e-UNnRIecF39efx5FOXZ_m4pA0eHQ&downloadName=Call+Me+%28Slowed%29.mp3', vibe: ["Sigma"] },
  { alt: '🌑', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f311.png', title: "After Dark", artist: "Mr.Kitty", file_name: 'Mr.Kitty - After Dark.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/60fd1294-5792-44c3-8741-0659d4c4b06f/Mr.Kitty_-_After_Dark.mp3?id=7a3951e8-a74b-4398-a63e-31c4efe41337&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=wBZLwfHijWFXHQnf2PTNl7KLdC_OPHSL-VBjV6lyo2w&downloadName=Mr.Kitty+-+After+Dark.mp3', vibe: ["Sigma"] },
  { alt: '🩸', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1fa78.png', title: "Bloody Mary Remix", artist: "", file_name: 'Bloody Mary (Remix).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/97d2463d-820d-48b6-b8fe-4fa849db2625/Bloody_Mary_(Remix).mp3?id=fb0ce787-28b3-40c9-957b-04b1f22224ad&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=VTAe-VcAb6XtWxAJASsfz7Cp3HaF01wjCTDhi0Ax_2k&downloadName=Bloody+Mary+%28Remix%29.mp3', vibe: ["Sigma"] },
  { alt: '🏜️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f3dc-fe0f.png', title: "Sahara", artist: "Hensonn", file_name: 'Hensonn-Sahara.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/9a25e681-51cf-475e-995f-d2c3497980e5/Hensonn-Sahara.mp3?id=6c38c7ff-1b01-4c43-ad28-6447794c9151&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=pbVpBoaDEJqzef8uvdXhJSGzlDj2MB4Jse9wLPhHxlM&downloadName=Hensonn-Sahara.mp3', vibe: ["Sigma"] },
  { alt: '🌀', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f300.png', title: "particles (slowed)", artist: "villiam lane", file_name: 'villiam lane - particles (slowed).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/79748497-ce34-4f87-b8f8-939d0866bf2a/villiam_lane_-_particles_(slowed).mp3?id=e5c4ef20-36a2-41b6-b3a6-bde363ca1b04&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=NPTkl09bIzOivzuiHeVmj6Qp9Hd_7mFWkfJe2mjNiEQ&downloadName=villiam+lane+-+particles+%28slowed%29.mp3', vibe: ["Sigma"] },
  { alt: '🦋', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f98b.png', title: "METAMORPHOSIS", artist: "Interworld", file_name: 'METAMORPHOSIS.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/228fbd8c-fb2b-49a8-942f-081f250af2d1/METAMORPHOSIS.mp3?id=6aad507a-6a0c-49a1-98cb-68520f3951d5&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=11mP3vPG_ExkCe_sCewFZQWKzxsFx00LF97dPldBQsM&downloadName=METAMORPHOSIS.mp3', vibe: ["Phonk"] },
  { alt: 'Page icon', emojis_url: 'https://hail-bakery-d94.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff69b3bf2-7d6f-4d02-af5b-b6f6fbb15252%2Ffe4985e9-9f50-4fa9-af5f-c83f90d660e6%2Fraf_360x360_075_t_fafafa_ca443f4786-removebg-preview.png?table=block&id=407e29c6-d0d7-43a0-8a98-ecfde58b33fa&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&width=250&userId=&cache=v2', title: "GigaChad Theme", artist: "g3ox_em", file_name: 'g3oxem - GigaChad Theme (Phonk House Version).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/52c63675-6f0a-4ff2-9d29-b621aa55dce3/g3oxem_-_GigaChad_Theme_(Phonk_House_Version).mp3?id=407e29c6-d0d7-43a0-8a98-ecfde58b33fa&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=2g9ljeWYTkgpXP1gvYM6KxtLhhsTLW449SP7f_nMd3w&downloadName=g3oxem+-+GigaChad+Theme+%28Phonk+House+Version%29.mp3', vibe: ["Phonk"] },
  { alt: '🌌', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f30c.png', title: "Dream Space", artist: "DVRST", file_name: 'DVRST - Dream Space.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/9f80861f-8c09-4fe0-93bf-d23274c34fe4/DVRST_-_Dream_Space.mp3?id=5a6b2567-0294-4763-aaf6-b96de28bdf94&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=Z6NZudGPtmxzsdy8xYsvYVGW-A6B0PkBd5uMHhxuEG0&downloadName=DVRST+-+Dream+Space.mp3', vibe: ["Phonk"] },
  { alt: '🔮', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f52e.png', title: "ESSENCE", artist: "Casper", file_name: 'ESSENCE.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/c4b6c04e-9238-4420-80d3-9c900e46dedc/ESSENCE.mp3?id=e39e153d-cbba-4cd2-b6e9-9cade0162bab&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=DKUHjy4VUf4dXtWLKTtRBkToOwOom8nsymLXGdgLx4M&downloadName=ESSENCE.mp3', vibe: ["Phonk"] },
  { alt: '👁️', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f441-fe0f.png', title: "Close Eyes (slowed + reverb)", artist: "DVRST", file_name: 'DVRST - Close Eyes (Slowed  Reverb).mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/20535bb2-664e-4a85-a1e2-dfac5f2ac6aa/DVRST_-_Close_Eyes_(Slowed__Reverb).mp3?id=0a4fd48c-140f-4566-91cb-31aa90bd1db3&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=PwpS8DPGC-oXqqNDYFBPtlVWGRyCA3rrtvnG18fSFm0&downloadName=DVRST+-+Close+Eyes+%28Slowed++Reverb%29.mp3', vibe: ["Phonk"] },
  { alt: '🪦', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1faa6.png', title: "Suicide Year", artist: "weedmane", file_name: 'WEEDMANE x Suicideyear SUICIDE YEAR.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/2946d057-ba77-419f-93ec-53937ba36a63/WEEDMANE_x_Suicideyear_SUICIDE_YEAR.mp3?id=990459f2-ee85-42ed-aee1-8bc8989b6ea2&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=VudKWA2FJPHVSHq08iXibYGakrCv_3MY9mgJVetHwes&downloadName=WEEDMANE+x+Suicideyear+SUICIDE+YEAR.mp3', vibe: ["Phonk"] },
  { alt: '🏠', emojis_url: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/img-google-136/1f3e0.png', title: "Money is for the Rent - Not For The Soul", artist: "Mr. Carmack", file_name: 'Mr. Carmack - MONEY IS FOR RENT - NOT FOR THE SOUL.mp3', song_url: 'https://file.notion.so/f/f/f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252/4868675d-36cc-42f7-93ea-79b26217ed77/Mr._Carmack_-_MONEY_IS_FOR_RENT_-_NOT_FOR_THE_SOUL.mp3?id=1351b819-6272-4550-9d29-b0a4b6693c8a&table=block&spaceId=f69b3bf2-7d6f-4d02-af5b-b6f6fbb15252&expirationTimestamp=1719993600000&signature=0W5OQRIjEKvlEXR1Uok_KSh8F1NpXO1iOWjm5O2AfJg&downloadName=Mr.+Carmack+-+MONEY+IS+FOR+RENT+-+NOT+FOR+THE+SOUL.mp3', vibe: ["idek i just think this is sick"] },
];

const App = () => {
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
                  <td className="px-2 py-1 border-b border-r border-gray-700"><div className='flex gap-1'><img className='w-4 h-4' alt={song.alt} aria-label={song.alt} src={song.emojis_url} ></img><a href={song.song_url}>{song.title} {song.artist ? '- ' + song.artist : null}</a></div></td>
                  {/* <td className="px-4 py-2 border-b border-gray-700">{song.artist}</td> */}
                  {/* <div class="flex flex-wrap gap-x-2 gap-y-1.5">

                  </div> */}

                  <td className="px-2 py-1 border-b border-r border-gray-700"><div className='flex w-28'><a download={song.song_url} target='_blank' rel="noreferrer" href={song.song_url} className="px-1 leading-6 rounded bg-white bg-opacity-10 cursor-zoom-in whitespace-nowrap overflow-hidden text-ellipsis">{song.file_name}</a></div></td>
                  <td className={`px-2 py-1 border-b border-gray-700 `}><div className='flex gap-2'>{song.vibe.map((vibe, index) => (<span className={`rounded px-1 whitespace-nowrap overflow-hidden text-ellipsis text-white/80 ${getVibeClass(vibe)}`} >{vibe}</span>))}</div></td>
                  {/* <td className="px-4 py-2 border-b border-gray-700"></td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
};

const getVibeClass = (vibe) => {
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

export default App;
