import React, { useState, useEffect, useContext } from "react";
import PopupGanador from "./PopupGanador";
import { cartasContext } from "./PantallaJuego";
import useSound from "use-sound";
import fxError from "../sound/error.mp3";
import fxNice from "../sound/nice.mp3";

const Carta = (props) => {
  const [mostrarCartas, setMostrarCartas] = useState(false);
  const [saltaPopup, setSaltaPopup] = useState(false);

  const {
    cartasSeleccionada,
    setCartasSeleccionada,
    puedoSeleccionar,
    setPuedoSeleccionar,
    contador,
    dificultad,
    setJugando,
  } = useContext(cartasContext);

  const [playNice] = useSound(fxNice);
  const [playError] = useSound(fxError);

  useEffect(() => {
    setSaltaPopup(false);
    setTimeout(() => {
      setMostrarCartas(true);
    }, 500);
    setTimeout(() => {
      setMostrarCartas(false);
      setPuedoSeleccionar(true);
    }, 5000);
  }, []);

  const handleSeleccionarCarta = (e) => {
    if (
      e.currentTarget.className !== "content mostrar-carta" &&
      e.currentTarget.className !== "content mostrar-carta carta-seleccionada" &&
      puedoSeleccionar
    ) {
      if (cartasSeleccionada === "") {
        setCartasSeleccionada(props.valor);
        e.currentTarget.className = "content mostrar-carta carta-seleccionada";
      } else {
        setPuedoSeleccionar(false);
        e.currentTarget.className = "content mostrar-carta";
        if (cartasSeleccionada === props.valor) {
          contador.current++;
          document.getElementsByClassName("carta-seleccionada")[0].className =
            "content mostrar-carta";
          setCartasSeleccionada("");
          playNice();
          if (
            (dificultad.current === "facil" && contador.current === 3) ||
            (dificultad.current === "medio" && contador.current === 5) ||
            (dificultad.current === "dificil" && contador.current === 8)
          ) {
            setSaltaPopup(true);
          }
        } else {
          const target = e.currentTarget;
          playError();
          setTimeout(() => {
            target.className = "content";
            document.getElementsByClassName("carta-seleccionada")[0].className =
              "content";
            setCartasSeleccionada("");
          }, 1000);
        }
        setTimeout(() => {
          setPuedoSeleccionar(true);
        }, 1000);
      }
    }
  };

  return (
    <>
      <div className="card">
        <div
          className={mostrarCartas ? "content mostrar-carta" : "content"}
          onClick={handleSeleccionarCarta}
        >
          <div
            className="front"
            style={{
              backgroundImage: `url(${props.fotos.dorso})`,
              backgroundSize: `100% 100%`,
            }}
          ></div>
          <div
            className="back"
            style={{
              backgroundImage: `url(${props.frontal})`,
              backgroundSize: `100% 100%`,
            }}
          ></div>
        </div>
      </div>
      {saltaPopup && <PopupGanador setJugando={setJugando}/>}
    </>
  );
};

export default Carta;
