import React from 'react';
import ListaProdutos from '../../data/produtos';
import './TabelaProdutos.css'

export default props => {
    const Produtos = ListaProdutos.map((produtos, i) => {
        return (
            <tr key={produtos.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                <td> {produtos.id} </td>
                <td> {produtos.nome} </td>
                <td> R$ {produtos.preco.toFixed(2).replace('.', ',')} </td>
            </tr>
        )
    });

    return (
        <div className='TabelaRepeticao'>
            <table>
                <thead>
                    <tr>
                        <th><strong>ID</strong></th>
                        <th><strong>NOME</strong></th>
                        <th><strong>PREÇO</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {Produtos}
                </tbody>
            </table>
        </div>
    )
}