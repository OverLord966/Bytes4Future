const express = require("express")
const { addSession, getSessionByToken } = require("./data/sessions")
const { addUser, getUserByEmail } = require("./data/users")
const { validateFields } = require("./services/validations")
const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())

app.post("/signup", (req, res) => {
    const {
        email,
        password,
        passwordConfirmation,
        acceptsTerms,
        acceptsCommunications
    } = req.body

    const validation = validateFields(req.body)
    if (validation.success) {
        addUser({
            email,
            password,
            passwordConfirmation,
            acceptsTerms,
            acceptsCommunications
        })
        res.status(201)
            .json({
                "message": "Utilizador Criado com Sucesso!"
            })
    } else {
        res.status(400).json({
            "message": "Os dados introduzidos não são válidos.",
            "errors": validation.errors
        })
    }
})

app.post("/login", (req, res) => {
    const {
        email,
        password
    } = req.body

    const user = getUserByEmail(email)
    if (!user) {
        return res
            .status(404)
            .json({
                "message": "O utilizador não foi encontrado!"
            })
    }
    if (user.password !== password) {
        return res
            .status(401)
            .json({
                "message": "A password introduzida é inválida!"
            })
    }

    const token = addSession(email)
    res.status(200)
        .json({ token })
})

app.get("/user", (req, res) => {
    const token = req.header("authorization")
    if (!token) {
        return res.status(401)
            .json({
                "message": "Não foi enviado o token de autenticação!"
            })
    }
    const session = getSessionByToken(token)
    if (!session) {
        return res.status(403)
            .json({
                "message": "Não existe nenhuma sessão com o token indicado!"
            })
    }

    const user = getUserByEmail(session.email)
    res.status(200)
        .json({
            email: user.email,
            acceptsTerms: user.acceptsTerms,
            acceptsCommunications: user.acceptsCommunications
        })
})


app.listen(
    PORT,
    () => console.log("À escuta na porta 3000")
)