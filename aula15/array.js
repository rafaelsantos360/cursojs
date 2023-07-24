let num = [5, 2, 8, 9, 3]
num.push(1)
num.sort()
let val = num.indexOf(8)
console.log(`O vetor tem ${num.length}`)

console.log(num)
for(pos in num) {
    console.log(num[pos])
}

if(val == -1) {
    console.log(`[ERRO] valor não encontrado!`)
} else {
    console.log(`A primeira possição do vetor é ${val}`)
}


