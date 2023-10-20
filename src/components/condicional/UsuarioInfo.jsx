import React from 'react'
import If, {Else} from './If' // Agora importando o componente Else também

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}> {/* Está testando se são válidos */}
                Seja bem-vindo <strong>{ usuario.nome }</strong>!

                <Else> {/* Caso não tenha o atributo 'usuario' ele retornará essa parte */}
                    só pra saber
                </Else>
            </If>
        </div>
    )
}