import React from 'react'

export default props => {

    // Salvando as informações pelo callback
    const cb = props.quandoClicar

    // Gerar a idade de maneira aleatória
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    
    // Gerar nerd de maneira aleatória
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            {/* 
            *   Ao clicar, ativará a função anônima que irá chamar a função quandoClicar 
            *   O '_' se dá pelo fato de não estarmos utilizando a variável
            *   '=>' Arrow Function (função anônima)
            *   'cb' variável criada que receber as propriedades
            *   Sempre que chamar callback, irá gerar uma nova idade
            *   Sempre que chamar callback, irá gerar um nerd
            */}
            <button onClick={_ => cb('João', gerarIdade(), gerarNerd())
            }>
                Fornecer Informações
            </button>
        </div>
    )
}