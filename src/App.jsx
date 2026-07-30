import "./App.css";
import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import { Footer } from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [aboutPageStatus, setboutPageStatus] = useState(false);
  return (
    <>
      <Header></Header>
      <Main
        aboutPageStatus={aboutPageStatus}
        setAboutPageStatus={setboutPageStatus}
      ></Main>
      <Footer setAboutPageStatus={setboutPageStatus}></Footer>
    </>
  );
}

export default App;
