import { useState, useEffect } from "react";
import { getCharacters, populateCharacterNames } from "./api/characters.js";
import { CharacterCard } from "./CharacterCard.jsx";
import { Score } from "./Score.jsx";
import "./styles/CharacterDeck.css";
import { shuffle } from "./utils/shuffle.js";

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
    if (charNames.length === 0) return;
    let ignore = false;

    getCharacters(charNames).then((res) => {
      if (ignore) return;
      if (charDeck.length === 0) {
        const shuffled = shuffle([...res]);
        setCharDeck([...shuffled].slice(0, 10));
      }
    });

    return () => {
      ignore = true;
    };
  }, [charNames, charDeck]);

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
