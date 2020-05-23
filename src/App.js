import React from 'react';
import logo from './assents/images/logo.svg';
import './assents/css/App.css';

import Willo from './Components/Willo'; 

function HolaMundo(nombre, edad){ 
  var nombre = " Joshua Roman Vazquez Benitez";
  var presentacion = (
  <div>
  <h2>Hola, soy{nombre} </h2>
  <h3>Tengo {edad} años</h3>
  </div>
  );
    return presentacion;
}
function App() {
  var nombre = " Joshua Roman"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a mi React!! 
        </p>
       { HolaMundo(nombre, 18)}
       <section className="componentes">
      <Willo/>
      </section>
      </header>

    </div>
  );
}

export default App;
