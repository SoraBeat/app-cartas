import React from 'react'

const PopupGanador = (props) => {
  return (
    <div className='contenedor-popup'>
        <div className='contenedor-popup-secundario'>
            <h2>¡FELICIDADES!</h2>
            <p>Gracias por jugar este juego, cualquier feedback sera bien recibido.</p>
            <p>Lautaro Elian Roa</p>
            <button onClick={()=>{props.setJugando(false)}}>Volver</button>
        </div>
    </div>
  )
}

export default PopupGanador