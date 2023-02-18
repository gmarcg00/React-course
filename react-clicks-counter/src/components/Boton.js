import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton({texto, esBotonClick, manejarClic}){
    return(
      <button className={esBotonClick ? "boton-clic" : "boton-reiniciar"} onClick={manejarClic}>
        {texto}
      </button>
    )
}

export default Boton