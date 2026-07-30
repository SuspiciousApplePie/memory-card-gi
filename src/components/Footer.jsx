function Footer({ setAboutPageStatus }) {
  return (
    <footer>
      <button onClick={() => setAboutPageStatus(true)}>About</button>
    </footer>
  );
}

export { Footer };
