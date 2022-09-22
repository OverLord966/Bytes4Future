const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3000;
const { Calculadora } = require("./calculadora");
const calculadora = new Calculadora();

app.use(express.json());

function validaArgumentos(a, b) {
    return !isNaN(Number(a))
        && (
            b === undefined
            || !isNaN(Number(b))
        )
}

app.post("/op/somar", (request, response) => {
    const { a, b } = request.body
    if (!validaArgumentos(a, b)) return response.status(400).json({ erro: "Argumentos Inválidos" })
    response.json({ calculadora: calculadora.somar(a, b).toJSON() })
})
app.post("/op/subtrair", (request, response) => {
    const { a, b } = request.body
    if (!validaArgumentos(a, b)) return response.status(400).json({ erro: "Argumentos Inválidos" })
    response.json({ calculadora: calculadora.subtrair(a, b).toJSON() })
})
app.post("/op/multiplicar", (request, response) => {
    const { a, b } = request.body
    if (!validaArgumentos(a, b)) return response.status(400).json({ erro: "Argumentos Inválidos" })
    response.json({ calculadora: calculadora.multiplicar(a, b).toJSON() })
})
app.post("/op/dividir", (request, response) => {
    const { a, b } = request.body
    if (!validaArgumentos(a, b)) return response.status(400).json({ erro: "Argumentos Inválidos" })
    response.json({ calculadora: calculadora.dividir(a, b).toJSON() })
})
app.post("/op/potencia", (request, response) => {
    const { a, b } = request.body
    if (!validaArgumentos(a, b)) return response.status(400).json({ erro: "Argumentos Inválidos" })
    response.json({ calculadora: calculadora.potencia(a, b).toJSON() })
})
app.post("/repetir", (request, response) => {
    const { num } = request.body
    response.json({ calculadora: calculadora.repetir(num).toJSON() })
})
app.delete("/", (request, response) => {
    response.json({ calculadora: calculadora.limparHistorico().toJSON() })
})
app.get("/ultimo-resultado", (request, response) => {
    response.json({ ultimoResultado: calculadora.obterResultado().toString() })
})
app.get("/", (request, response) => {
    response.json({ calculadora: calculadora.toJSON() })
})
app.listen(PORT, () =>
    console.log(`a escuta em http://localhost:${PORT}`
    ))