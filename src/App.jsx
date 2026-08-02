import "./App.css";
import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import { useState } from "react";

function App() {
  const [aboutPageStatus, setAboutPageStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Header
        aboutPageStatus={aboutPageStatus}
        setAboutPageStatus={setAboutPageStatus}
      ></Header>
      <Main
        aboutPageStatus={aboutPageStatus}
        setAboutPageStatus={setAboutPageStatus}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      ></Main>
    </>
  );
}

export default App;
