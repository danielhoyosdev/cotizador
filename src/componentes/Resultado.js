import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Resultado extends Component{
    render(){
        const resultado = this.props.resultado;

        return(
            <div className="gran-total">
                <h2>
                    Total: $
                    <TransitionGroup component="span" className="resultado" >
                        <CSSTransition classNames="resultado" key={ resultado } timeout={{enter: 500, exit: 500}} >
                            <span> { resultado } </span>
                        </CSSTransition>
                    </TransitionGroup>
                    US
                </h2>
            </div>
        );
    }
}

export default Resultado;