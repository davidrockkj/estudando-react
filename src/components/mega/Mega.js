const lista = []

// gerarNumeros(5)

// function gerarNumeros(qtd) {
//     let i = 0;
//     for (let i = 0; i < qtd; i++) {
//         console.log('Antes do looping');

//         do {
//             console.log('Dentro do looping');

//             let numeroSorteado = parseInt((Math.random() * 6) + 1);
//             console.log(`Numero gerado: ${numeroSorteado}`)
    
//         } while (!lista.find((numero) => numero = numeroSorteado))
    
//         lista = lista.push(numeroSorteado);
//         console.log(`Números sorteados: ${lista}`)
    
//         i++;
//     }

//     console.log('LISTA FINAL: ' + lista);
// }

// Verifica se repete. Se não, adiciona o número
// function duplicidade(array, numero){
//     do {
//         let numeroSorteado = (Math.random() * 100) + 1;
//         console.log(`Numero gerado: ${numeroSorteado}`)

//     } while (!array.find(numero))

//     const lista = lista.push(numeroSorteado);
//     console.log(`Números sorteados: ${lista}`)

//     i++;

// }

function main() {
    for (let i=0; i<5; i++) {
        let numero = gerarNumero()
        console.log('Sorteado: ' + numero);

        while (!repetido(lista, numero)) {
            numero = gerarNumero()
            console.log('Já tem' + numero)
        }

        console.log(numero + ' é um número novo')

        let adicionar = lista.push(numero)
        // console.log('Adicionar:' + adicionar)
        console.log('A lisa completa: ' + lista)
    }

}

function gerarNumero() {
    let numero = parseInt((Math.random() * 10) + 1);
    
}

function repetido(array, numero) {
    return array === numero;
}

main();