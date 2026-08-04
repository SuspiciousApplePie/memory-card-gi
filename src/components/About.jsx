import "./styles/About.css";

function About({ aboutPageStatus, setAboutPageStatus }) {
  return (
    <div
      className={
        (aboutPageStatus && "about-page") ||
        (!aboutPageStatus && "about-page hide")
      }
    >
      <h1>About</h1>
      <p>
        &copy; All rights reserved by <strong>COGNOSPHERE</strong>. Other
        properties belong to their respective owners.
        <br />
        <br />
        This app is not affliated with, endorsed, or sponsored by{" "}
        <strong>HoYoverse</strong>, <strong>COGNOSPHERE</strong>, or{" "}
        <strong>miHoYo</strong>. Genshin Impact and all related character names,
        art, and assets are property of <strong>COGNOSPHERE Pte. Ltd</strong>.
        <br />
        <br />
        Character art and data sourced from{" "}
        <a href="https://genshin.dev">genshin.dev</a>, an unofficial
        fan-maintained Genshin Impact API.
        <br />
        <br />
        Credits to <a href="https://www.dafont.com/athy.d10816">athy!!</a> for
        the font.
      </p>
      <button onClick={() => setAboutPageStatus(false)}>Back</button>
    </div>
  );
}

export { About };
