function CharacterCard({ id, name, title, vision }) {
  return (
    <figure className="character-card">
      <img
        src={`https://genshin.jmp.blue/characters/${name.toLowerCase()}/card`}
        alt={name + "photo"}
        width={300}
        height={350}
      />
      <figcaption>
        <span className="name">{name}</span>
        <span className="title">{title}</span>
      </figcaption>
    </figure>
  );
}

export { CharacterCard };
