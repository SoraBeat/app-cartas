import React,{useState} from "react";
import "./App.css";
import TituloPrincipal from "./components/TituloPrincipal";
import PantallaJuego from "./components/PantallaJuego";


function App() {
  const [jugando, setjugando] = useState(false);
  const [dificultad, setDificultad] = useState("facil");
  return (
    <>
      {!jugando ?(
        <TituloPrincipal setJugando={setjugando} setDificultad={setDificultad}/>
      ):<PantallaJuego setJugando={setjugando} dificultad={dificultad}/>}
    </>
  );
}

export default App;
