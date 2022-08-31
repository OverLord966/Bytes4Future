function soma(a, b) {
    return a + b
}

function geraFuncao(func) {
    return () => func(3, 4)
}

console.log(
    geraFuncao(soma),
    geraFuncao(outraFuncao)
)

function outraFuncao() {}
