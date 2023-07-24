lista = [5, 2, 6, 4, 9]
let soma = 0
for(let i = 0; i < lista.length; i++){
    soma += lista[i] 
}
let media = soma / lista.length
alert(`A média dos valores é ${media}`)