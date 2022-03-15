var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText = 'clicou!' 
    a.style.background = 'green'
}

function entrar() {
    a.innerText = 'entrou!'
    a.style.background = 'red'
} 

function sair() {
    a.innerText = 'sair'
    a.style.background = 'green'
}