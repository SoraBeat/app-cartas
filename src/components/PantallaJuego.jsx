import React, { useState, createContext, useRef } from "react";
import Carta from "./Carta";

import imgHtml from "../img/frontal-html.png";
import imgCss from "../img/frontal-css.png";
import imgAngular from "../img/frontal-angular.png";
import imgReact from "../img/frontal-react.png";
import imgJs from "../img/frontal-js.png";
import imgNode from "../img/frontal-node.png";
import imgVue from "../img/frontal-vue.png";
import imgPhp from "../img/frontal-php.png";
import imgDorso from "../img/dorso.png";

export const cartasContext = createContext();

const PantallaJuego = (props) => {
  const [cartasSeleccionada, setCartasSeleccionada] = useState("");
  const [puedoSeleccionar, setPuedoSeleccionar] = useState(false);
  const contador = useRef(0);
  const dificultad = useRef(props.dificultad);

  const fotos = {
    html: imgHtml,
    css: imgCss,
    angular: imgAngular,
    js: imgJs,
    node: imgNode,
    php: imgPhp,
    vue: imgVue,
    react: imgReact,
    dorso: imgDorso,
  };

  const facil = [
    <Carta key="1" fotos={fotos} frontal={fotos.html} valor={"html"} />,
    <Carta key="2" fotos={fotos} frontal={fotos.html} valor={"html"} />,
    <Carta key="3" fotos={fotos} frontal={fotos.css} valor={"css"} />,
    <Carta key="4" fotos={fotos} frontal={fotos.css} valor={"css"} />,
    <Carta key="5" fotos={fotos} frontal={fotos.js} valor={"js"} />,
    <Carta key="6" fotos={fotos} frontal={fotos.js} valor={"js"} />,
  ];
  const medio = [
    <Carta key="1" fotos={fotos} frontal={fotos.html} valor={"html"} />,
    <Carta key="2" fotos={fotos} frontal={fotos.html} valor={"html"} />,
    <Carta key="3" fotos={fotos} frontal={fotos.css} valor={"css"} />,
    <Carta key="4" fotos={fotos} frontal={fotos.css} valor={"css"} />,
    <Carta key="5" fotos={fotos} frontal={fotos.js} valor={"js"} />,
    <Carta key="6" fotos={fotos} frontal={fotos.js} valor={"js"} />,
    <Carta key="7" fotos={fotos} frontal={fotos.php} valor={"php"} />,
    <Carta key="8" fotos={fotos} frontal={fotos.php} valor={"php"} />,
    <Carta key="9" fotos={fotos} frontal={fotos.react} valor={"react"} />,
    <Carta key="10" fotos={fotos} frontal={fotos.react} valor={"react"} />,
  ];
  const dificil = [
    <Carta key="1" fotos={fotos} frontal={fotos.html} valor={"html"} />,
    <Carta key="2" fotos={fotos} frontal={fotos.html} valor={"html"} />,
    <Carta key="3" fotos={fotos} frontal={fotos.css} valor={"css"} />,
    <Carta key="4" fotos={fotos} frontal={fotos.css} valor={"css"} />,
    <Carta key="5" fotos={fotos} frontal={fotos.js} valor={"js"} />,
    <Carta key="6" fotos={fotos} frontal={fotos.js} valor={"js"} />,
    <Carta key="7" fotos={fotos} frontal={fotos.php} valor={"php"} />,
    <Carta key="8" fotos={fotos} frontal={fotos.php} valor={"php"} />,
    <Carta key="9" fotos={fotos} frontal={fotos.react} valor={"react"} />,
    <Carta key="10" fotos={fotos} frontal={fotos.react} valor={"react"} />,
    <Carta key="11" fotos={fotos} frontal={fotos.node} valor={"node"} />,
    <Carta key="12" fotos={fotos} frontal={fotos.node} valor={"node"} />,
    <Carta key="13" fotos={fotos} frontal={fotos.angular} valor={"angular"} />,
    <Carta key="14" fotos={fotos} frontal={fotos.angular} valor={"angular"} />,
    <Carta key="15" fotos={fotos} frontal={fotos.vue} valor={"vue"} />,
    <Carta key="16" fotos={fotos} frontal={fotos.vue} valor={"vue"} />,
  ];
  function shuffleArray(inputArray) {
    return inputArray.sort(() => Math.random() - 0.5);
  }
  const facilRan = useRef(shuffleArray(facil));
  const medioRan = useRef(shuffleArray(medio));
  const dificilRan = useRef(shuffleArray(dificil));

  return (
    <cartasContext.Provider
      value={{
        cartasSeleccionada,
        setCartasSeleccionada,
        puedoSeleccionar,
        setPuedoSeleccionar,
        contador,
        dificultad,
        setJugando:props.setJugando
      }}
    >
      <div className="contenedor-juego">
        <div className="contenedor-cartas">
          {props.dificultad === "facil" && facilRan.current}
          {props.dificultad === "medio" && medioRan.current}
          {props.dificultad === "dificil" && dificilRan.current}
        </div>
      </div>
    </cartasContext.Provider>
  );
};

export default PantallaJuego;
