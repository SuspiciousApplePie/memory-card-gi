import { CharacterDeck } from "./CharacterDeck.jsx";
import { About } from "./About.jsx";
import { Loading } from "./Loading.jsx";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage.jsx";

function Main({
  aboutPageStatus,
  setAboutPageStatus,
  isLoading,
  setIsLoading,
}) {
  const [error, setError] = useState({});
  return (
    <main
      className={
        (aboutPageStatus && "about") || (!aboutPageStatus && undefined)
      }
    >
      <Loading isLoading={isLoading} aboutPageStatus={aboutPageStatus} />
      <ErrorMessage error={error} />
      <About
        aboutPageStatus={aboutPageStatus}
        setAboutPageStatus={setAboutPageStatus}
      />
      <CharacterDeck
        aboutPageStatus={aboutPageStatus}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        error={error}
        setError={setError}
      />
    </main>
  );
}

export { Main };
