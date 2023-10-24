import "./Input.css"
import React, {useState} from 'react'

export default props => {
    
    const [valor, setValor] = useState('Inicial')

    // Função para alterar o valor do input
    function quandoMudar(e) {
        setValor(e.target.value)
            // Salvando o novo valor cada vez que a função for chamada
    }
    
    return (
        <div className='Input'>
            <h2>{valor}</h2>
                {/* Irá mostrar o valor do input */}

            <div>
                <input value={valor} onChange={quandoMudar} />
                    {/*
                        * O evento 'onChange' será chamado sempre que tiver uma alteração (digitar no input)
                    */}

                <input value={valor} readOnly />
                    {/*
                        * Quando não tiver o 'onChange',
                        dará erro pedindo para que coloque a marcação de 'readOnly',
                        vez que não irá alterar seu valor
                    */}

                <input value={undefined} />
                    {/*
                        * Componente não controlado
                        * Não há um vínculo com o estado
                        * Mas dá para alterar
                    */}
            </div>
        </div>

    )
}