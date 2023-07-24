let caixa = document.getElementById('txt')
let botao = document.querySelector('#btn')

function setSave(v){
    localStorage.setItem('opcao', v)
    alert(`Valor salvado ${v.value}`)
}

botao.onclick = () => {
    setSave(caixa)
    
}

