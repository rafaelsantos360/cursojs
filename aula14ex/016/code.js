function contar() {
    let inicio = document.querySelector('#txtin')
    let fim = document.querySelector('#txtout')
    let passo = document.querySelector('#pass')
    let res = document.getElementById ('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados suficiente!')
    }else {
        res.innerHTML = 'contando.. <br>' 
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert('passo menor que zero vai ser considerado [1]')
            p = 1
        }

        if(i < f) {//contagem crecente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else {//contagem regressiva 
                for(let c = i; c >= f; c -= p)
                res.innerHTML += ` ${c} \u{1F449}`
            }

            res.innerHTML += ` \u{1F3C1}`
    }
    
}