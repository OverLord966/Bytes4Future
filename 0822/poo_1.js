class Inteiro {
    static eInteiro(n) {
        return Number.isInteger(n)
    }

    // static eInteiro(n) {
    //     //Se n -> 1
    //     //E arredondarmos e continuar a 1
    //     //Quer dizer que o número é inteiro

    //     //Se n -> 4.7
    //     //E arredondarmos -> 4
    //     return n === Math.floor(n)
    // }


    static nulo = 0;
}

console.log(Inteiro.eInteiro("abc"))

// Inteiro.eInteiro() //Invocar método na classe

// const inteiro = new Inteiro()
// inteiro.eInteiro() //Invocar método na instância


// Number.isInteger(n) //Exemplo de método estático
