import React from 'react';
import './CharacterGrid.css';
import ironManImage from '../../Images/IronMan.png';  // Corrected path
import spiderManImage from '../../Images/SpiderMan.png'; // Corrected path
import thorImage from '../../Images/Thor.png'; // Corrected path

const characters = [
  { id: 1, name: 'Iron Man', image: ironManImage },
  { id: 2, name: 'Spider-Man', image: spiderManImage },
  { id: 3, name: 'Thor', image: thorImage },
];

const CharacterGrid = () => {
  return (
    <div className="character-grid">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;
