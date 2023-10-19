import './App.css'
import React from 'react';

import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from './components/layout/Card';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default () =>
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            
            <Card titulo='#09 - Renderização Condicional' color='#006e90'>
                <ParOuImpar numero={20} />
            </Card>

            <Card titulo='#08 - Desafio Repetição' color='#9a6d38'>
                <TabelaProdutos />
            </Card>
            
            <Card titulo='#07 - Repetição' color='#33673b'>
                <ListaAlunos />
            </Card>

            <Card titulo='#06 - Componente com Filhos' color='#ff7f11'>
            <Familia sobrenome='Ferreira'>
                <FamiliaMembro nome='Pedro' />
                <FamiliaMembro nome='Luan' />
                <FamiliaMembro nome='Jasmin' />
                </Familia>
            </Card>

            <Card titulo='#05 - Criação do Card' color='#453823'></Card>

            <Card titulo='#04 - Desafio Aleatório' color='#d8315b'>
                <Aleatorio min={2} max={5} />
            </Card>

            <Card titulo='#03 - Fragmento' color='#d8b4e2'>
                <Fragmento />
            </Card>

            <Card titulo='#02 - Com Parâmetro' color='#3e92cc'>
                <ComParametro
                    titulo='Situação do Aluno'
                    aluno='Pedro'
                    nota='9.3'
                />
            </Card>

            <Card titulo='#01 - Primeiro' color='#0a2463'>
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>