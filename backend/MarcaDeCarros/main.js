
const express = require("express");
const app = express()
const port = 3000
app.use(express.json())

const marca = ["mercedes","audi"]
const existe = true;

app.get("/api/carros/:marca", (req, res) => {
    //Retorna um JSON com todos os marca registados
    if(req.params.marca == "mercedes"){
        console.log("Existe")
        return res.status(200).json({marca: req.params.marca, existe: true})
    }
    else if(req.params.marca == "audi"){
        return res.status(200).json({marca: req.params.marca, existe: true})
    }
    else{
        console.log("Não Existe")
        return res.status(404).json({existe: false})
    }
})

app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
})
/*
const animais = []

app.post("/api/animal", (req, res) => {
    //Recebe um JSON com o name, birthday e gera um ID sequencial (começando no 0)
    const id = animais.length
    animais.push({...req.body, id: id})
    res.status(200).json({id})
})
app.get("/api/animal", (req, res) => {
    //Retorna um JSON com todos os animais registados
    res.status(200).json({animais: animais})
})
app.get("/api/animal/:id", (req, res) => {
    //Retorna um JSON com o animal que tem o id indicado

    const animal = animais.find(animal => animal.id === Number(req.params.id))
    if (!animal) return res.sendStatus(404)
    res.status(200).json(animal)
})

*/

/*
Cria uma API REST com um endpoint com o caminho /api/carros/:marca.

A API deve ter o método GET que verifica se o parâmetro :marca é igual a mercedes ou audi:

Se for, responde com o código de estado 200 e com um objeto com a propriedade existe a true.

Caso contrário responde com o código de estado 404 e com um objeto com a propriedade existe a false.
*/
