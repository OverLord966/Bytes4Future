const { generateToken } = require("../services/common")

const sessions = []

function addSession(email) {
    const token = generateToken(email)
    sessions.push({
        email,
        token
    })
    return token
}

function getSessionByToken(token) {
    return sessions.find(s => s.token === token)
}

module.exports = {
    addSession,
    getSessionByToken
}