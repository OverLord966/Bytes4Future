/* function superDigito(n, k){
    let str = "";
    let str11 = "";
    let i = 0;
    while (i < k){
        str = n+n;
        if(str > k){
            str = str+str
        }
        i++
    }

    for(let a = 0; a < str.length; a++){
        for(let b = 1; b < str.length; b++){
        }
    }
    if(str.length == 1) return str
    console.log(str)
    return str
}
 */
function superDigito(n, k) {
    let res = 0n;

    while (n.length >= 2) {
        res = 0n;
        for (let i = 0; i < n.length; i++) {
            res += BigInt(n[i])
        }
        n = String(res)
    }

    const resultado = res * BigInt(k)
    if(String(resultado).length > 1){
        return superDigito(String(resultado), 1);
    }
    return resultado;
}


console.log(superDigito('9875', 4)) // 8
console.log(superDigito('9875', 123123123123)) // 3
console.log(superDigito('9875', 123123123123123123123)) // 5 