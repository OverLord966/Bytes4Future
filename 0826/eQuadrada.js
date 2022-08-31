console.log(
    eQuadrada([
        [1, 2, 3],
        [1, 2]
    ]) // false
)

console.log(
    eQuadrada([
        [1, 2],
        [1, 2]
    ]) // true
)

function eQuadrada(matriz) {
    return matriz.every(a => a.length === matriz.length)
}