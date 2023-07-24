let contarLetras = function(p){
    cont = 0
    for(let letra in p){
        cont += 1
        console.log(cont)
    }
    console.log(`O total de letras é ${cont}`)
}

let palavra = 'rafael'

contarLetras(palavra)