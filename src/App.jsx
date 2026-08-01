import "./App.css";
import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import { Footer } from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [aboutPageStatus, setAboutPageStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Header></Header>
      <Main
        aboutPageStatus={aboutPageStatus}
        setAboutPageStatus={setAboutPageStatus}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      ></Main>
      <Footer setAboutPageStatus={setAboutPageStatus}></Footer>
    </>
  );
}

export default App;
