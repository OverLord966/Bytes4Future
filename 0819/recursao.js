// recursao()

// function recursao() {
//     if() {

//     }
//     console.log("Fui invocada")
//     recursao()
// }

function contaDeNAZero(n) {
    console.log(n)
    if (n <= 0) {
        console.log("Valor Inválido")
        return
    }
    if(n == 1) {
        return
    }
    contaDeNAZero(n - 1)
}

contaDeNAZero(-3)
contaDeNAZero(1000)

//1000
//999
//998
//997
//996
//...
//1

console.log(a)
let a = "b"

fatorialErrado() //Não funciona, a função é declarada como variável e só pode ser executada depois da linha 38
let fatorialErrado = () => {}

function fatorialRecursivo(n) {
    if (n === 1) {
        return 1
    }
    return n * fatorialRecursivo(n - 1)
}

/*
fatorial(4)

4 * fatorial(3)
    3 * fatorial(2)
        2 * fatorial(1)
            1
*/

function fatorialCiclo(n) {
    let fatorial = 1
    for(let i = 1; i <= n; i++) {
        fatorial *= i
    }
}

function fatorialCiclo2(n) {
    let fatorial = 1
    for(let i = n; i >= 1; i--) {
        fatorial *= i
    }
}

fatorialCiclo(4)



