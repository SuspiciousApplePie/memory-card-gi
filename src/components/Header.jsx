function Header({ aboutPageStatus, setAboutPageStatus }) {
  return (
    <header>
      <h1>Genshin Impact Memory Card Game</h1>
      <button
        className={(aboutPageStatus && "about-btn clicked") || "about-btn"}
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
