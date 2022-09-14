import React from "react";

const TituloPrincipal = (props) => {
  return (
    <div className="contenedor-principal">
      <img alt="logo del juego" className="imagen-logo" src={require("../img/Logo.png")} />
      <div className="contenedor-ui">
        <select onChange={(e)=>props.setDificultad(e.target.value)} className="ddl-dificultad">
          <option value={"facil"}>FACIL</option>
          <option value={"medio"}>MEDIO</option>
          <option value={"dificil"}>DIFICIL</option>
        </select>
        <button className="boton-play" onClick={() => props.setJugando(true)}>
          Play
        </button>
      </div>
    </div>
  );
};

export default TituloPrincipal;
