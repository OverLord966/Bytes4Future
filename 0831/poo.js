class Pessoa {
    constructor(nome, altura) {
        this.nome = nome
        this.altura = altura
    }

    saltar() {
        console.log(`Eu, ${this.nome}, saltei!`)
    }
}

let pessoa = new Pessoa("Rafael", 210)


let outraPessoa = {
    nome: "Rafael",
    altura: 210,
    saltar: () => {
        console.log(`Eu, ${this.nome}, saltei!`)
    }
}

// outraPessoa.altura.toString()


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let outra = array.map((ele) => ele * 2).concat(26).reduce().filter().some()
outra.concat(26)

function soma(a, b) {
    return a + b
}

console.log(
    soma(1, 2),
    soma(array[0], array[1]),
    soma(...array)
)