import React from 'react';

export default props => {
    const min = props.min;
    const max = props.max;

    // ou por desestruturação
    // const { min, max } = props;

    const numero = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                Valor mínimo: {min}
            </p>
            <p>
                Valor máximo: {max}
            </p>
            <p>
                Valor escolhido: {numero}
            </p>
        </div>
    )
}