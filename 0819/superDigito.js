function superDigito(n) {
    while (Number(n) > 9) {
        console.log(`A calcular o superDigito de ${n}`)
        let soma = 0;
        for (let i = 0; i < n.length; i++) {
            soma += Number(n[i])
        }
        n = String(soma)
    }
    console.log("---------")
    return Number(n)
}

console.log(
    superDigito('9875'), // 2 
    "---------------",
    superDigito('12'), // 3
    "---------------",
    superDigito('1') // 1
)

// "9875" -> 9 + 8 + 7 + 5