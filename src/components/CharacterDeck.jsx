import { useState, useEffect } from "react";
import { getCharacters, populateCharacterNames } from "./api/characters.js";
import { CharacterCard } from "./CharacterCard.jsx";
import { Score } from "./Score.jsx";
import "./styles/CharacterDeck.css";

function CharacterDeck({ aboutPageStatus }) {
  const [charNames, setCharNames] = useState([]);
  const [charDeck, setCharDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(new Set());
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    populateCharacterNames().then((res) => {
      setCharNames([...res]);
    });
  }, []);

  useEffect(() => {
    getCharacters(charNames).then((res) => {
      setCharDeck([...res].slice(0, 12));
    });
  }, [charNames]);

  const characters = charDeck.map((char) => {
    return (
      <CharacterCard
        key={char.id}
        character={char}
        score={score}
        setScore={setScore}
        clicked={clicked}
        setClicked={setClicked}
        setCharDeck={setCharDeck}
        setHighScore={setHighScore}
      />
    );
  });

  return (
    <div
      className={
        (aboutPageStatus && "character-deck hide") ||
        (!aboutPageStatus && "character-deck")
      }
    >
      <Score score={score} highScore={highScore} />
      <div className="cards">{characters}</div>
    </div>
  );
}

export { CharacterDeck };
