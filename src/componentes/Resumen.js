import React, { Component } from 'react'

// Componentes
import Resultado from './Resultado';

class Resumen extends Component{
    mostrarResultado(){
        const { marca, plan, year } = this.props.datos;

        if(Object.keys(this.props.datos).length !== 0){
            return(
                <div>
                    <div className="resumen">
                        <h2>Resumen de Datos</h2>
                        <li>Marca: <span>{ marca }</span></li>
                        <li>Plan: <span>{ plan }</span></li>
                        <li>Año: <span>{ year }</span></li>
                    </div>

                    <Resultado resultado={ this.props.resultado } />
                </div>
            );
        }
    }

    render(){
        return(<> { this.mostrarResultado() } </>);
    }
}

export default Resumen;