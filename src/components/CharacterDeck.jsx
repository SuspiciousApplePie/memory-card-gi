import { useState, useEffect } from "react";
import { getCharacters } from "./api/characters.js";
import { CharacterCard } from "./CharacterCard.jsx";
import { Score } from "./Score.jsx";
function CharacterDeck() {
  const [charDeck, setCharDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(new Set());

  useEffect(() => {
    getCharacters(["traveler-anemo", "amber", "kaeya", "lisa"]).then((res) => {
      setCharDeck([...res]);
    });
  }, []);

  const characters = charDeck.map((char) => {
    return (
      <CharacterCard
        key={char.id}
        character={char}
        setScore={setScore}
        clicked={clicked}
        setClicked={setClicked}
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
