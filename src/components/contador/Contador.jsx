import "./Contador.css";
import React from "react";

// Componente baseado em classe
export default class Contador extends React.Component {
  // 1 - Passando os atributos pelo estado -----------------------------
  state = {
    // * Inicializando com o valor inicial
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  /*
     *  2 - Passando os atributos por um construtor -----------------------
    constructor(props){
        super(props)
    }

    //
     *  3 - Passando os atributos por um construtor e um estado -----------
    constructor(props){
        super(props)

        this.state = {
            // * Inicializando com o valor inicial
            numero: props.numeroInicial
        }
    }
    */

  /**
     * Função que incrementa o valor do contador
     * Isso irá alterar o valor (estado) de 'numero'
     * Dessa maneira ele apresenta erro, pois o 'this' não aponta para o local correto
    
    inc() {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    
     *  A maneira mais prática de criar essa função seria através da Arrow Function
     *  Pois o 'this' dentro de uma Arrow está relacionado com o contexto no qual
        a função foi escrita
     */
  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  // Função para decrementar
  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  // Função para alterar o valor do 'passo'
  setPasso = (evento) => {
    this.setState({
      passo: +evento.target.value,
      // o '+' converte o valor para 'int'
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <h3>{this.state.numero}</h3>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input
            id="passoInput"
            type="number"
            value={this.state.passo}
            onChange={this.setPasso}
          />
        </div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

/**
 * Por estar em um componente baseado em classe, é comum estar usando o 'this'
 * Mas nem sempre o 'this' irá apontar para o local certo
 */
