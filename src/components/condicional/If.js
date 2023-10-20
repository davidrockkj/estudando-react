export default props => {

    const elseChild = props.children.filter(child => {
        console.log(child.type)
        return child.type && child.type.name === 'Else' // Irá retornar um array
    })[0] // Para retornar apenas o primeiro elemento, ao invés do array
            // Caso não encontre, retornará 'undefined'

    const ifChildren = props.children.filter(child => {
        console.log(child)
        return child !== elseChild // Retornará TODOS os filhos que não sejam Else
    })

    if(props.test) {
        console.log(ifChildren)
        return ifChildren
    } else if(elseChild) { // Se tiver Else, irá retornar o elseChild 
        console.log(elseChild)
        return elseChild
    } else {
        return false
    }
}

export const Else = props => props.children