const data = new Date()
console.log(data)

const diaEmMs = 24 * 60 * 60 * 1000
const dataFutura = new Date(data.valueOf() + diaEmMs)
console.log(dataFutura)

console.log(dataFutura.getHours())
console.log(dataFutura.getUTCHours())