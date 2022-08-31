class ContadorDeInstancias {
    static instancias = 0;
    constructor() {
        ContadorDeInstancias.instancias += 1
    }
}

// console.log(
//     ContadorDeInstancias.instancias
// ) // 0
new ContadorDeInstancias()
// console.log(
//     ContadorDeInstancias.instancias
// ) // 1
// new ContadorDeInstancias()
// new ContadorDeInstancias()
// new ContadorDeInstancias()

// console.log(
//     ContadorDeInstancias.instancias
// ) // 4


class Questao {
    constructor() {
        return "adsfwefwef"
    }
}

console.log(new Questao())