import { useState, useEffect } from "react";
import { getCharacters, populateCharacterNames } from "./api/characters.js";
import { CharacterCard } from "./CharacterCard.jsx";
import { Score } from "./Score.jsx";
function CharacterDeck() {
  const [charNames, setCharNames] = useState([]);
  const [charDeck, setCharDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(new Set());

  useEffect(() => {
    populateCharacterNames().then((res) => {
      setCharNames([...res].slice(0, 8));
    });
  }, []);

  useEffect(() => {
    getCharacters(charNames).then((res) => {
      setCharDeck([...res]);
    });
  }, [charNames]);

  const characters = charDeck.map((char) => {
    return (
      <CharacterCard
        key={char.id}
        character={char}
        setScore={setScore}
        clicked={clicked}
        setClicked={setClicked}
        setCharDeck={setCharDeck}
      />
    );
  });

  return (
    <div className="character-deck">
      <Score score={score} />
      {characters}
    </div>
  );
}

export { CharacterDeck };
