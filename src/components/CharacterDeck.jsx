import { useState, useEffect } from "react";
import { getCharacters } from "./api/characters";
import { CharacterCard } from "./CharacterCard";
function CharacterDeck() {
  const [charDeck, setCharDeck] = useState([]);

  useEffect(() => {
    getCharacters(["traveler-anemo", "amber", "kaeya", "lisa"]).then((res) => {
      setCharDeck([...res]);
    });
  }, []);

  const characters = charDeck.map((char) => {
    return (
      <CharacterCard
        key={char.id}
        id={char.id}
        name={char.name}
        title={char.title}
      />
    );
  });

  return <div className="character-deck">{characters}</div>;
}

export { CharacterDeck };
