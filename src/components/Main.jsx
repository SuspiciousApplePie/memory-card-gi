import { CharacterDeck } from "./CharacterDeck.jsx";
import { About } from "./About.jsx";

function Main({ aboutPageStatus, setAboutPageStatus }) {
  return (
    <main
      className={
        (aboutPageStatus && "about") || (!aboutPageStatus && undefined)
      }
    >
      <About
        aboutPageStatus={aboutPageStatus}
        setAboutPageStatus={setAboutPageStatus}
      />
      <CharacterDeck aboutPageStatus={aboutPageStatus} />
    </main>
  );
}

export { Main };
