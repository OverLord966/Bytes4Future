const users = []

function getUserByEmail(email) {
    return users.find(u => u.email === email)
}

function addUser(user) {
    return users.push(user)
}

function checkIfEmailExists(email) {
    return users.some(u => u.email === email)
}

module.exports = {
    getUserByEmail,
    addUser,
    checkIfEmailExists
}