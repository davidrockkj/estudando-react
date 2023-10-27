// function gerarNumeros(qtd) {
//     // Criando a lista
//     const listaSorteio = []

//     for ( let i = 0; i < qtd; i++ ) {
//         let numero;

//         if (listaSorteio.length > 0) {
//             // Gerando numero aleatorio
//             numero = parseInt((Math.random()*(qtd+50))+1);

//             // Enquanto gerar um número presente na lista, gera outro
//             while (lista.includes(numero)) {
//                 numero = parseInt((Math.random()*(qtd+50))+1);           
//             }
            
//             // Adicionando número na lista
//             lista.push(numero);

//         } else {
//             numero = parseInt((Math.random()*(qtd+50))+1);
//             lista.push(numero);
//         }
//     }

//     // Ordenando a lista em ordem crescente
//     lista.sort( (a, b) => {
//         return a-b;
//         }
//     )

//     /**
//      * A função a seguir é pra caso eu queira ver todos os elementos
//      * O `forEach` percorre toda a lista
//      */
//     // lista.forEach( (lista) => {
//     //     console.log(lista)
//     // })
// }

// gerarNumeros(5)





// Solução do curso ------------------------------
// Função para gerar números não repetidos
function gerarNumeroNaoContido(min, max, array) {
	const aleatorio = parseInt(Math.random() * ((max + 1) - min) + min)
	
	// Recursividade
	return array.includes(aleatorio) ?
		gerarNumeroNaoContido(min, max, array) :
		aleatorio
}

// Função para gerar o Array de 'qtde' de elementos
function gerarNumeros(qtde) {
	const numeros = Array(qtde)
		.fill(0)
		.reduce((nums) => {

			//  Acumulador () e o Valor atual (cada 1 dos 0 - nao vai precisar receber)
			const novoNumero = gerarNumeroNaoContido(1, 60, nums)
			return [ ...nums, novoNumero] // Array antigo + número novo
		}, [])
		.sort((n1, n2) => n1 - n2) // Ordem crescente

	return numeros
}