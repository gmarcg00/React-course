
import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [numClics,setNumClics] = useState(0); 
 

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setNumClics(0) 
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp">

        </img>
      </div>
      <div className="contenedor-principal">
        <Contador
        numClics={numClics}>

        </Contador>
        <Boton
        texto="Click"
        esBotonClick={true}
        manejarClic={manejarClic}>
        </Boton>
        <Boton
        texto="Reiniciar"
        esBotonClick={false}
        manejarClic={reiniciarContador}>
        </Boton>
      </div>
    </div>
  );
}

export default App;
