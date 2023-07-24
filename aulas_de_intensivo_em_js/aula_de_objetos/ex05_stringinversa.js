let inverso = (p) => {
    let cont = ' '
    for(let letra  = p.length; letra >= 0; letra --){
        cont += p[letra]
        
    }
    return cont
}

let palavra = 'rafael'
res = inverso(palavra)
console.log(res)