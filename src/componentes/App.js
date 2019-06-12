import React, { Component } from "react";

// Componentes
import Header from "./Header";
import Formulario from "./Formulario";
import Resumen from "./Resumen";

// Helpers
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper'

class App extends Component{
    state = {
        precio : 0,
        datos : {}
    }

    cotizarSeguro = (datos) => {
        const { marca, year, plan } = datos;
        const diferenciaAnios = obtenerDiferenciaAnio(year);
        
        let precio = 2000;

        // Por cada año que pasa se decrementa el precio del seguro en 3%
        precio -= ((diferenciaAnios * 3) * precio) / 100;

        // Según tipo de marca se ingrementa el precio del seguro
        precio = calcularMarca(marca) * precio;

        // Según tipo plan de inclementa el precio del seguro: Básico (20%), Completo (50%)
        precio = (obtenerPlan(plan) * precio).toFixed(2);

        this.setState({
            precio,
            datos
        })
    }

    render(){
        return(         
            <div className="contenedor">
                <Header title="Cotizador Seguros de Autos" />

                <div className="contenedor-formulario">
                    <Formulario cotizarSeguro={ this.cotizarSeguro }/>

                    <Resumen datos={this.state.datos} resultado={this.state.precio}/>
                </div>
            </div>  
        );
    };
}

export default App;
