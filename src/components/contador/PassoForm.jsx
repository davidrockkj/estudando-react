import React from 'react'

export default props => {
    return (
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input
            id="passoInput"
            type="number"
            value={props.passo}
            onChange={e =>props.setPasso(+e.target.value)}
                /**
                 * Passa o evento 'e'
                 * Chama props.setPasso
                 * Recebendo 'e.target.value'
                 * O '+' converte para um valor numérico
                 */
          />
        </div>
    )
}