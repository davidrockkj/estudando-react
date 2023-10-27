import './Mega.css'
import React, {useState} from "react";

export default props => {

  // Função para gerar números não repetidos
  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * ((max + 1) - min) + min)
    
    // Recursividade
    return array.includes(aleatorio) ?
      gerarNumeroNaoContido(min, max, array) :
      aleatorio
  }

  // Função para gerar o Array de 'qtde' de elementos
  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {

        //  Acumulador () e o Valor atual (cada 1 dos 0 - nao vai precisar receber)
        const novoNumero = gerarNumeroNaoContido(1, 60, nums)
        return [ ...nums, novoNumero] // Array antigo + número novo
      }, [])
      .sort((n1, n2) => n1 - n2) // Ordem crescente

    return numeros
  }

  // useState 2
  const [qtde, setQtde] = useState(props.qtde || 6)
  // Gerando o Array
  const numerosIniciais = Array(qtde).fill(0);
  // useState 1
  const [numeros, setNumeros] = useState(numerosIniciais)

  return (
    <div className='Mega'>
      <h2>Megasena</h2>
      <h3>{numeros.join(' ')}</h3> {/*Mostrando e espaçando os números*/}
      <div>
        <label>Qtde de Números</label>
        {/**O valor de qtde é definido aqui */}
        <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)} />
      </div>
      <button onClick={_ => setNumeros(gerarNumeros(qtde))}> {/*Gera a qtde de números*/}
        Gerar Números
      </button>
    </div>
  )
}