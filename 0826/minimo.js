console.log(
    minimoSimples([1, -1, -4, -2]) // -1
)

function minimoSimples(array) {
    return array
        .reduce((min, v) =>
            v < min
                ? v
                : min)
}

console.log(
    minimo([
        { valor: 1, nome: "a" },
        { valor: -1, nome: "aa" },
        { valor: 3, nome: "aabc" },
        { valor: 0, nome: "aab" },
    ], "valor") // {valor: -1, nome: "aa"}
)

console.log(
    soma([
        { valor: 1, nome: "a" },
        { valor: -1, nome: "aa" },
        { valor: 3, nome: "aabc" },
        { valor: 0, nome: "aab" },
    ], "valor", 0)// {valor: -1, nome: "aa"}
)

console.log(
    soma([
        { valor: 1, nome: "a" },
        { valor: -1, nome: "aa" },
        { valor: 3, nome: "aabc" },
        { valor: 0, nome: "aab" },
    ], "nome", "") // {valor: -1, nome: "aa"}
)

function minimo(array, propriedade) {
    return array
        .reduce((min, v) =>
            v[propriedade] < min[propriedade]
                ? v
                : min)
}



function soma(array, propriedade, valorInicial) {
    return array
        .reduce((res, v) =>
            res + v[propriedade]
            , valorInicial)

    // let res = valorInicial;
    // for (let i = 0; i < array.length; i++) {
    //     const v = array[i]
    //     res = res + v[propriedade]
    // }
    // return res
}