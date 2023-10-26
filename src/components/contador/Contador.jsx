import "./Contador.css";
import React from "react";

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

// Componente baseado em classe
export default class Contador extends React.Component {
  // 1 - Passando os atributos pelo estado -----------------------------
  state = {
    // * Inicializando com o valor inicial
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

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
  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
      // o '+' converte o valor para 'int'
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm
          passo={this.state.passo}
          setPasso={this.setPasso}
          />
        <Botoes
          setInc={this.inc} 
          setDec={this.dec}
          />
      </div>
    );
  }
}

/**
 * Por estar em um componente baseado em classe, é comum estar usando o 'this'
 * Mas nem sempre o 'this' irá apontar para o local certo
 */
