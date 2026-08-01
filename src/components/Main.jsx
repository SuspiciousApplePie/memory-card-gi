import { CharacterDeck } from "./CharacterDeck.jsx";
import { About } from "./About.jsx";
import { Loading } from "./Loading.jsx";

function Main({
  aboutPageStatus,
  setAboutPageStatus,
  isLoading,
  setIsLoading,
}) {
  return (
    <main
      className={
        (aboutPageStatus && "about") || (!aboutPageStatus && undefined)
      }
    >
      <Loading isLoading={isLoading} aboutPageStatus={aboutPageStatus} />
      <About
        aboutPageStatus={aboutPageStatus}
        setAboutPageStatus={setAboutPageStatus}
      />
      <CharacterDeck
        aboutPageStatus={aboutPageStatus}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </main>
  );
}

export { Main };
