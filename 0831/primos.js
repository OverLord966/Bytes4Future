function ePrimo(n) {
    const maxNum = Math.sqrt(n)
    for (let i = 2; i <= maxNum; i++) {
        if (n % i === 0) return false
    }
    return true;
}

function imprimePrimos() {
    let i = 3;
    while (true) {
        const naoEDivisivel = i % 2 !== 0
            && i % 3 !== 0
            && i % 5 !== 0
        if (!ePrimo(i) && naoEDivisivel) {
            console.log(i)
            return
        } else if (naoEDivisivel) {
            console.log(i)
        }
        i++
    }
}

imprimePrimos()
// 2, 3, 5

// console.log(ePrimo(5))