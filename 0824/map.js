let array = [1, 2, 3, 4]

// console.log(
//     array.map((atual) => {
//         return atual * 2
//     })
// )

array.map(atual => atual * 2)


let pessoas = [
    {
        nome: "Luís",
        idade: 73,
        aniversario: 3
    },
    {
        nome: "Joaquim",
        idade: 83,
        aniversario: 15
    },
    {
        nome: "Neto",
        idade: 12,
        aniversario: 3
    },
    {
        nome: "Cláucia",
        idade: 38,
        aniversario: 39
    }
]

//Soma
// console.log(
//     pessoas.some(pessoa => pessoa.idade >= 18),
//     pessoas.some(pessoa => pessoa.idade >= 90),
// )

//Every
// console.log(
//     pessoas.every(pessoa => pessoa.idade >= 18),
//     pessoas.every(pessoa => pessoa.idade < 90),
// )



//Find
// console.log(
//     pessoas.findIndex((pessoa) => pessoa.idade >= 90)
// )

//Filter
// console.log(
//     pessoas.filter((pessoa) => pessoa.idade < 18)
// )

// const diaAtual = 15
// console.log(
//     pessoas.map(pessoa => {
//         if (pessoa.aniversario === diaAtual) {
//             return { ...pessoa, idade: pessoa.idade + 1 }
//         }
//         return pessoa
//     }).map(pessoa => pessoa.idade)
// )

// console.log(
//     pessoas.map(pessoa => pessoa.nome)
// )
//["Luís", "Joaquim", "Neto"]




let array2 = [1, 5, 2, 8, -3]
//Encontrar o maior
let acumulador = array[0]
for (let i = 0; i < array.length; i++) {
    const numero = array[i]
    if(numero > acumulador) {
        acumulador = numero
    }
}

// console.log(
//     array2.reduce((acumulador, numero) => {
//         if(numero > acumulador) {
//             return numero
//         }
//     })
// )
console.log(
    array2.sort((a, b) => a - b),
    // array2.sort((a, b) => b - a)
)