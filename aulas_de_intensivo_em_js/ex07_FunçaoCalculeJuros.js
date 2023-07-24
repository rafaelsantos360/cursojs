function juros(v, t){
    return v * t / 100
}

let valor = 1000
let taxa = 10

let res = juros(valor, taxa)

console.log(`A taxa de juros de 10% será de R$${res}`)