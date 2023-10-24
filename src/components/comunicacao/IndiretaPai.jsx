import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    /*
    let nome = useState('?')
        
        * Retorna um array com duas posições:
        * 1 - valor em si
        * 2 - função para alterar o valor
    */
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    
    
    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
    
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>


            {/* quandoClicar -> propriedade que irá chamar a função */}
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}