import React from 'react'

export default props => {

    // Salvando as informações pelo callback
    const cb = props.quandoClicar

    return (
        <div>
            <div>Filho</div>
            {/* 
            Ao clicar, ativará a função anônima
            que irá chamar a função quandoClicar 
                
            * O '_' se dá pelo fato de não estarmos utilizando a variável
            * '=>' Arrow Function (função anônima)
            * 'cb' variável criada que receber as propriedades
            */}
            <button onClick={_ => cb('João', 53, true)
            }>
                Fornecer Informações
            </button>
        </div>
    )
}