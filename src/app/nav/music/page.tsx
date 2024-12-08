import React from 'react'
import Image from "next/image";

// Interface for Music Object Properties
interface MusicObjProps {
  name: string;
  src: string;
}

// Your music objects array
const musicObjs: MusicObjProps[] = [
  { name: "Cazir University", src: "" },
  { name: "Acceptance Letter", src: "" },
  { name: "Planet Cazir", src: "" },
  { name: "Ali Anthem", src: "" },
];

const renderMusicObjects = () => {
  return (
    musicObjs.map(
      (music: MusicObjProps) => {
        return (
          <div key={music.name} className=''>
            <Image
              src={music.src}
              alt={music.name}
              width={100}
              height={100}
            />
            <h2 className=''>{music.name}</h2>
          </div>
        );
      }
    )
  );
}

const page: React.FC = () => {
  return (
    <div className=''>
      {renderMusicObjects()}
    </div>
  );
};


export default page