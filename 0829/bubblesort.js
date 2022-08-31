let nTrocas = 0;
function bubbleSort(arr) {
    let ordenada = false
    // Enquanto o vetor não está ordenado
    while (!ordenada) {
        //   Assume que o vetor está ordenado
        ordenada = true;
        //   Para cada elemento
        for(let i = 0; i < arr.length - 1; i++) {
            //     Se o elemento e o próximo não estão na ordem certa
            if (arr[i] > arr[i + 1]) {
                //       Troca elemento com o próximo
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                nTrocas++;
                //       Marca vetor como não estando ordenado
                ordenada = false;
            }
        }
    }
    return arr;
}


function geraArray(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n))
        // arr.push(i)
    }
    // arr.push(0)
    return arr
}

const arr10M = geraArray(100000)
const cloneArr10M = arr10M.slice(0)
const startedAt = new Date()
const arr = bubbleSort(arr10M)
console.log(arr, `${(new Date() - startedAt) / 1000}s using bubblesort, com ${nTrocas} trocas`)

const startedAtClone = new Date()
const arr2 = cloneArr10M.sort((a, b) => a - b)
console.log(arr2, `${(new Date() - startedAtClone) / 1000}s using .sort`)