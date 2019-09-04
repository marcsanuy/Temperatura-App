import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';



function App() {

  //State principal
  // ciudad = state. guardarCiudad = this.setState()
  const [ ciudad, guardarCiudad ] = useState('');
  const [ pais, guardarPais] = useState('');
  const [ error, guardarError ] = useState(false);
  const [ resultado, guardarResultado] = useState({})

  useEffect(() => {

    //prevenir ejecución
    if(ciudad === '') return;

    const consultarAPI = async () => {

      const appId = '5bc109ba866ed9ec1b5b165571690703';
  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
      // Consultar la URL
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
  
      guardarResultado(resultado);
  
    }

    consultarAPI();
  }, [ ciudad, pais ]);

  const datosConsulta = datos => {
    
    //Validar que ambos campos aparezcan
    if(datos.ciudad === '' || datos.pais === '') {
      guardarError(true);
      return;
    }

    //Ciudad u pais existen agregados al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  

  // Cargar un componente Condicionalmente

  let componente;
  if(error){
    //hay error, mostrarlo
    componente = <Error mensaje='Debes rellenar ambos campos' />
  } else if (resultado.cod === "404") {
    componente = <Error mensaje="Error de búsqueda, compruebe que ha introducido bien el nombre de la Ciudad y el Pais"/>
  } else {
    //Mostrar el clima
    componente = <Clima 
                   resultado={resultado} 
                  />;
  }

  return (
    <div className="App">
      <Header
        titulo='Temperatura App' 
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                datosConsulta={datosConsulta}
              />
            </div>

            <div className="col s12 m6">
              {componente}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
