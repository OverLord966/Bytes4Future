// //JavaScript
// let valorJs = 4
// valor = []

// //C's
// int valorC = 4
// valorC = 4.3

//TypeScript
let valorType: Array<number | string> = [3, "dsf", 3]
valorType = []

export default valorType

function doubleArrayItems(arr: number[]): number[] {
    return arr.map(e => e * 2)
}

doubleArrayItems([3])



class Projetor {
    ligado: boolean
    constructor() {
        this.ligado = false
    }

    ligarDesligar() {
        this.ligado = !this.ligado
    }
}
const projetor = new Projetor()
const armazemDosProjetores: Array<Projetor> = [new Projetor()]

// for(let i = 0; i < armazemDosProjetores.length; i++) {
//     const elemento = armazemDosProjetores[i]
//     elemento.adicionarRefeicao()
//     elemento.ligarDesligar()
// }

type Mesa = {
    pernas: Perna[]
    tampo: string
}
type Perna = {
    tamanho: number
}

const mesas: Mesa[] = []


// Esta função recebe um argumento de qualquer tipo
// e retorna um valor do mesmo tipo do argumento
function identidade<Type>(arg: Type): Type {
    return arg;
}

const a = identidade("")
const ab = identidade(3)