class FabricaDeTestes {
    #testes
    constructor(testes) {
        this.#testes = testes
    }

    testar(funcao) {
        //chamar a funcao para cada um dos testes

        let a = this.#testes.reduce((acc, ele) => {
            return funcao(...ele.argumentos) === ele.resultadoEsperado
            ? { ...acc, testesSucedidos: acc.testesSucedidos + 1 } 
            : { ...acc, testesFalhados: [...acc.testesFalhados, ele.nome] }
        }, { testesSucedidos: 0, testesFalhados: [] })


        if (a.testesSucedidos === this.#testes.length) {
            return "Todos os testes executados com sucesso."
        }

        return `Falhou ${this.#testes.length - a.testesSucedidos}/${this.#testes.length} testes, exemplo: ${a.testesFalhados[0]}`
    }
}




const testesSoma = [
    { argumentos: [3, 2], resultadoEsperado: 5, nome: "Soma 3 e 2" },
    { argumentos: [4, 8], resultadoEsperado: 12, nome: "Soma 4 e 8" },
    { argumentos: [2, 2], resultadoEsperado: 4, nome: "Soma 2 e 2" },
]

const fabrica = new FabricaDeTestes(testesSoma)
function soma(a, b) {
    return a + b
}

function soma2(a, b) {
    return a * b
}

console.log(
    fabrica.testar(soma)  // Todos os testes executados com sucesso.

)

console.log(
    fabrica.testar(soma2)
)
     // Falhou 2/3 testes, exemplo: "Soma 3 e 2"