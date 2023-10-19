import React from 'react'
import '../../data/alunos'
import alunos from '../../data/alunos'

export default props => {

    const alunosLI = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}{')'} {aluno.nome} -{'>'} {aluno.nota}
            </li>
        );
    });

    return (
        <div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0}}>
                {alunosLI}
            </ul>
        </div>
    )
}