import React from "react";
import { useParams } from "react-router-dom";
import adamWarlockHQ from '../../Images/AdamWarlockHQ.png';
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
  { id: 1, name: "Adam Warlock", image: adamWarlockHQ, description: "The genetically-engineered Adam Warlock wields mighty Quantum Magic, allowing him to connect and heal souls with a gentle touch. When the time comes for his allies to unite, Warlock emerges as the unwavering epicenter of cosmic justice!", lore: "Adam Warlock was created to be the perfect specimen. Able to manipulate powerful cosmic forces, he represents the full potential of what we could one day become. Until then, he stands as a shining golden beacon of all that is good within us. When the timestream entanglement struck, Adam Warlock reflexively shielded himself in a protective cocoon. When he emerged, his cosmic senses identified Knull's impending threat. Traveling to Klyntar, Adam encountered the Guardians of The Galaxy and discovered a power even greater than Knulls, ready to incinerate the planet-and countless others", skins: [], abilities: [] },
  { id: 2, name: "Black Panther", image: blackPantherImage, description: "King of Wakanda.", lore: "Lorem ipsum...", skins: [], abilities: [] },
  // Add other characters with similar details
];

const CharacterDetail = () => {
    // Get the character ID from the URL params
    const { id } = useParams();
  
    // Find the character using the ID
    const character = characters.find((char) => char.id === parseInt(id));
  
    if (!character) {
      return <div>Character not found.</div>;  // In case the character doesn't exist
    }
  
    return (
      <div className="character-detail">
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} className="large-image" />
        <p>{character.description}</p>
        <p>{character.lore}</p>
        {/* Add more details as needed */}
      </div>
    );
  };
  
  export default CharacterDetail;