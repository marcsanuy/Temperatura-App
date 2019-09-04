import React from 'react';

function Clima({resultado}) {

    // extraer los resultados
    const { name, main } = resultado;

    if(!name) return null;

    //restar grados 
    const kelvin = 273.15;

    return(
        <div className="card-panel orange accent-4 col s12">
            <div className="black-text">
                <h2>Temperatura actual de {name}:</h2>
                <p className="temperatura">
                { parseInt(main.temp_max - kelvin, 10 ) }<span>&#x2103;</span>
                </p>
                <p>Temperatura Máxima : { parseInt(main.temp_max - kelvin, 10 ) } &#x2103;</p>
                <p>Temperatura Mínima : { parseInt(main.temp_min - kelvin, 10 ) } &#x2103;</p>
            </div>
        </div>
    )
}

export default Clima;



        