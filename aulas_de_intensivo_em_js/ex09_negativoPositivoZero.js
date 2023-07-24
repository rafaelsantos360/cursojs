let analizador = function(v){
    if(v > 0){
        return 'Possitivo!'
    }else if(v < 0){
        return 'Negativo!'
    }else{
        return 'Zero!'
    }
}

let valor = prompt('Digite valor: ')
res = analizador(valor)

alert(res)