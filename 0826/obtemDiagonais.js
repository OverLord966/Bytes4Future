console.log(
    obtemDiagonais([
        [1, 2, 3],
        [1, 2]
    ]) // [[1], [1, 2], [2], [3]]
)
console.log(
    obtemDiagonais([
        [1, 2],
        [1, 2],
    ]) // [[1], [1, 2], [2]]
)

console.log(
    obtemDiagonais([
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
    ]) // [[1], [1, 2], [2]]
)

function obtemDiagonais(matriz) {
    let diagonais = []

    for (let i = matriz.length - 1; i > 0; i--) {
        diagonais.push(obtemDiagonal(matriz, i, 0))
    }

    const comprimentoMaiorLinha = Math.max(
        ...matriz.map(m => m.length)
    )
    for (let i = 0; i < comprimentoMaiorLinha; i++) {
        diagonais.push(obtemDiagonal(matriz, 0, i))
    }

    return diagonais;
}

function obtemDiagonal(matriz, l, c) {
    let diagonal = []
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[l + i] !== undefined
            && matriz[l + i][c + i] !== undefined) {
            diagonal.push(matriz[l + i][c + i])
        }
    }
    return diagonal
}