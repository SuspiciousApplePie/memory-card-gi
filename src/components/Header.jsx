function Header({ setAboutPageStatus }) {
  return (
    <header>
      <h1>Genshin Impact Memory Card Game</h1>
      <button
        onClick={() => {
          setAboutPageStatus(true);
        }}
      >
        About
      </button>
    </header>
  );
}

export { Header };
