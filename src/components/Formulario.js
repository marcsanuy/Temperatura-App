import React, { useState } from 'react';

function Formulario ({datosConsulta}) {

    //state del componente
    //busqueda = state, guardarBusqueda = this.setState({})
    const [busqueda,guardarBusqueda] = useState({
        ciudad : "",
        pais : ""
    })

    const handleChange = e => {
        //cambiar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const consultarClima = e => {
        e.preventDefault();

        //pasar hacia el componente principal la búsqueda del usuario
        datosConsulta(busqueda);
    }

    return(
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div  className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona un país</option>
                    <option value="ES">España</option>
                    <option value="FR">Francia</option>
                    <option value="IT">italia</option>
                    <option value="AD">Andorra</option>
                    <option value="FI">Finlandia</option>
                    <option value="GR">Grecia</option>
                    <option value="NO">Noruega</option>
                </select>
            </div>  

            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block orange darken-2" value="Buscar Temperatura" />
            </div>
        </form>
    )
}
export default Formulario;