function potenciaGrande(x, n) {
    // Retorna x^n, os números podem ser enormes e os argumentos podem ser do tipo Number
    return BigInt(x) ** BigInt(n)
}

console.log(potenciaGrande(10, 3000))