import React from 'react';
import './CharacterGrid.css';
import ironManImage from '../../Images/IronMan.png';  // Corrected path
import spiderManImage from '../../Images/SpiderMan.png'; // Corrected path
import thorImage from '../../Images/Thor.png'; // Corrected path
import adamWarlockImage from '../../Images/AdamWarlock.png';
import blackPantherImage from '../../Images/BlackPanther.png';
import blackWidowImage from '../../Images/BlackWidow.png';
import captainAmericaImage from '../../Images/CaptainAmerica.png';
import cloakAndDaggerImage from '../../Images/CloakandDagger.png';
import doctorStrangeImage from '../../Images/DoctorStrange.png';
import grootImage from '../../Images/Groot.png';
import hawkeyeImage from '../../Images/Hawkeye.png';
import helaImage from '../../Images/Hela.png';
import hulkImage from '../../Images/Hulk.png';
import jeffTheLandSharkImage from '../../Images/JeffTheLandshark.png';
import lokiImage from '../../Images/Loki.png';
import lunaSnowImage from '../../Images/LunaSnow.png';
import magikImage from '../../Images/Magik.png';
import magnetoImage from '../../Images/Magneto.png';
import mantisImage from '../../Images/Mantis.png';
import moonKnightImage from '../../Images/MoonKnight.png';
import namorImage from '../../Images/Namor.png';
import peniParkerImage from '../../Images/PeniParker.png';
import psylockeImage from '../../Images/Psylocke.png';
import punisherImage from '../../Images/Punisher.png';
import rocketRaccoonImage from '../../Images/RocketRaccoon.png';
import scarletWitchImage from '../../Images/ScarletWitch.png';
import squirrelGirlImage from '../../Images/SquirrelGirl.png';
import starLordImage from '../../Images/StarLord.png';
import stormImage from '../../Images/Storm.png';
import venomImage from '../../Images/Venom.png';
import winterSoldierImage from '../../Images/WinterSoldier.png';
import wolverineImage from '../../Images/Wolverine.png';
import ironFistImage from '../../Images/IronFist.png';


const characters = [
  { id: 1, name: 'Adam Warlock', image: adamWarlockImage },
  { id: 2, name: 'Black Panther', image: blackPantherImage },
  { id: 3, name: 'Black Widow', image: blackWidowImage },
  { id: 4, name: 'Captain America', image: captainAmericaImage },
  { id: 5, name: 'Cloak and Dagger', image: cloakAndDaggerImage },
  { id: 6, name: 'Doctor Strange', image: doctorStrangeImage },
  { id: 7, name: 'Groot', image: grootImage },
  { id: 8, name: 'Hawkeye', image: hawkeyeImage },
  { id: 9, name: 'Hela', image: helaImage },
  { id: 10, name: 'Hulk', image: hulkImage },
  { id: 11, name: 'Iron Fist', image: ironFistImage },
  { id: 12, name: 'Iron Man', image: ironManImage },
  { id: 13, name: 'Jeff the Land Shark', image: jeffTheLandSharkImage },
  { id: 14, name: 'Loki', image: lokiImage },
  { id: 15, name: 'Luna Snow', image: lunaSnowImage },
  { id: 16, name: 'Magik', image: magikImage },
  { id: 17, name: 'Magneto', image: magnetoImage },
  { id: 18, name: 'Mantis', image: mantisImage },
  { id: 19, name: 'Moon Knight', image: moonKnightImage },
  { id: 20, name: 'Namor', image: namorImage },
  { id: 21, name: 'Peni Parker', image: peniParkerImage },
  { id: 22, name: 'Psylocke', image: psylockeImage },
  { id: 23, name: 'Punisher', image: punisherImage },
  { id: 24, name: 'Rocket Raccoon', image: rocketRaccoonImage },
  { id: 25, name: 'Scarlet Witch', image: scarletWitchImage },
  { id: 26, name: 'Spider-Man', image: spiderManImage },
  { id: 27, name: 'Squirrel Girl', image: squirrelGirlImage },
  { id: 28, name: 'Star Lord', image: starLordImage },
  { id: 29, name: 'Storm', image: stormImage },
  { id: 30, name: 'Thor', image: thorImage },
  { id: 31, name: 'Venom', image: venomImage },
  { id: 32, name: 'Winter Soldier', image: winterSoldierImage },
  { id: 33, name: 'Wolverine', image: wolverineImage }
];


const CharacterGrid = () => {
  return (
    <div className="character-grid">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;
