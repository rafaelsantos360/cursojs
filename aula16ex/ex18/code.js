let num = document.querySelector('#fnum')
let list = document.querySelector('#flist')
let res = document.querySelector('#res')
let valores = []

function isNumber(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 

function inlist(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inlist(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já esta na lista!')
    }
    num.value = ''
    num.focus()
} 

function finalizar(){
    if(valores.length == 0){
        window.alert('Coloque um numero antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = valores[0]
        let media = valores[0]
        media = soma/tot
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            else if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot}</p>` 
        res.innerHTML += `<p>O maior valor é ${maior} e o menor valor é ${menor}</p> `
        res.innerHTML += `<p>O resultado medio dos valores é iqual a ${media}<p>`
    }
}