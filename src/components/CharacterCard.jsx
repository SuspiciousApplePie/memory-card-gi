import { shuffle } from "./utils/shuffle.js";
import "./styles/CharacterCard.css";

function CharacterCard({
  character,
  score,
  setScore,
  clicked,
  setClicked,
  setCharDeck,
  setHighScore,
}) {
  function selectChar() {
    if (!clicked.has(character.id)) {
      setClicked((prev) => new Set(prev).add(character.id));
      setScore((prev) => prev + 1);
    } else {
      setClicked(new Set());
      setHighScore((prev) => {
        if (score > prev) return score;
        else return prev;
      });
      setScore(0);
    }
    setCharDeck((charDeck) => [...shuffle([...charDeck])]);
  }
  return (
    <figure className="character-card" onClick={selectChar}>
      <img
        src={`https://genshin.jmp.blue/characters/${character.id.toLowerCase()}/card`}
        alt={name + " " + "photo"}
        width={250}
        height={300}
        fetchPriority="high"
      />
      <figcaption>
        <span className="name">{character.name}</span>
        <span className="title">{character.title}</span>
      </figcaption>
    </figure>
  );
}

export { CharacterCard };
