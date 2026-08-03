function Header({ aboutPageStatus, setAboutPageStatus }) {
  return (
    <header>
      <h1>Traveler's Memoir</h1>
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
