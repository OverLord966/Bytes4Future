function comparaTexto(a, b) {
    return `${a}` > `${b}`
        ? a
        : b
}

console.log(comparaTexto(2, 10)) // 2
console.log(comparaTexto(1, 10)) // 10