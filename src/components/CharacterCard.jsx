import { shuffle } from "./utils/shuffle.js";

function CharacterCard({
  character,
  setScore,
  clicked,
  setClicked,
  setCharDeck,
}) {
  function selectChar() {
    if (!clicked.has(character.id)) {
      setClicked(clicked.add(character.id));
      setScore((prev) => prev + 1);
    } else {
      setClicked(new Set());
      setScore(0);
    }
    setCharDeck((charDeck) => [...shuffle([...charDeck])]);
  }
  return (
    <figure className="character-card" onClick={selectChar}>
      <img
        src={`https://genshin.jmp.blue/characters/${character.id}/card`}
        alt={name + " " + "photo"}
        width={300}
        height={350}
      />
      <figcaption>
        <span className="name">{character.name}</span>
        <span className="title">{character.title}</span>
      </figcaption>
    </figure>
  );
}

export { CharacterCard };
