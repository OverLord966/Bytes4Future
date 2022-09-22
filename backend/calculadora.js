// Feliz Segunda-Feira

// Classe Calculadora
class Calculadora {
    #historico
    #ultimoResultado

    static operacoes = new Map([
        ['+', (a, b) => a + b],
        ['-', (a, b) => a - b],
        ['*', (a, b) => a * b],
        ['/', (a, b) => a / b],
        ['**', (a, b) => a ** b],
    ])

    constructor() {
        this.limparHistorico()
    }

    // somar(a, b)
    somar(a, b) {
        this.#aplicaOperacao(a, b, '+')
        // Retornar instância da Calculadora
        return this
    }

    #aplicaOperacao(a, b, op) { // op +, -, *, /
        // CorrigeArgumentos
        const args = this.#corrigeArgumentos(a, b)
        // Calcular o Resultado
        const opFunc = Calculadora.operacoes.get(op)
        const resultado = opFunc(args.a, args.b)
        // Guardar Resultado no historico
        this.#historico.push(new EntradaDoHistorico(
            args.a,
            op,
            args.b,
            resultado,
            b === undefined // foi usado ultimo resultado
        ))
        // Guardar Resultado no ultimoResultado
        this.#ultimoResultado = resultado
    }

    #corrigeArgumentos(a, b) {
        // Corrigir Ordem dos Argumentos
        // Corrigir Tipo dos Argumentos
        if (b === undefined) {
            return {
                a: this.#ultimoResultado,
                b: BigInt(a)
            }
        }
        return {
            a: BigInt(a),
            b: BigInt(b)
        }
    }

    // subtrair(a, b)
    subtrair(a, b) {
        this.#aplicaOperacao(a, b, '-')
        // Retornar instância da Calculadora
        return this
    }

    // multiplicar(a, b)
    multiplicar(a, b) {
        this.#aplicaOperacao(a, b, '*')
        return this
    }

    // dividir(a, b)
    dividir(a, b) {
        this.#aplicaOperacao(a, b, '/')
        return this
    }
    potencia(a, b) {
        this.#aplicaOperacao(a, b, '**')
        return this
    }
    repetir(n) {
        const aRepetir = this.#historico[n - 1]
        this.#aplicaOperacao(
            aRepetir.usarUltimoResultado
                ? aRepetir.b
                : aRepetir.a,
            aRepetir.usarUltimoResultado
                ? undefined
                : aRepetir.b,
            aRepetir.op,
        )
        return this
    }

    // obterResultado()
    obterResultado() {
        return this.#ultimoResultado
    }

    // limparHistorico()
    limparHistorico() {
        this.#historico = []
        this.#ultimoResultado = 0n
        return this
    }

    // toString()
    toString() {
        if (this.#historico.length === 0) {
            return "Calculadora Limpa"
        }
        return `=== Histórico da Calculadora ===
${this.#historico.map((h, i) => `${i + 1}. ${h}`).join('\n')}
=== Fim do Histórico ===
${this.#historico.length === 1
                ? `Foi realizada 1 operação`
                : `Foram realizadas ${this.#historico.length} operações`
            }
Último Resultado: ${this.#ultimoResultado}`
    }

    // toJSON()
    toJSON() {
        return {
            historico: this.#historico.map(h => h.toString()),
            ultimoResultado: String(this.#ultimoResultado)
        }
    }
}

class EntradaDoHistorico {
    #a
    #op
    #b
    #resultado
    #usarUltimoResultado

    constructor(a, op, b, resultado, usarUltimoResultado) {
        this.#a = a
        this.#op = op
        this.#b = b
        this.#resultado = resultado
        this.#usarUltimoResultado = usarUltimoResultado
    }

    get a() { return this.#a }
    get op() { return this.#op }
    get b() { return this.#b }
    get resultado() { return this.#resultado }
    get usarUltimoResultado() { return this.#usarUltimoResultado }

    toString() {
        return `${this.#a} ${this.#op} ${this.#b} = ${this.#resultado}`
    }
}

const calc = new Calculadora()
const calc1 = new Calculadora()

module.exports = {
    Calculadora,
}