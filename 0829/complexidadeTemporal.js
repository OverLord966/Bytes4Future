const array = [1, 2, 3, 4, 5,6, 7, 8, 9, 10]

//Complexidade temporal O(n)
for(let i = 0; i < array.length; i++) {}

//Complexidade temporal O(n^2)
for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
        console.log(`${i} ${j}`)
    }
}

//Complexidade temporal constante
function soma(a, b) {
    return a + b
}

soma(1, 1)
soma(10000, 10000)