let titulo = document.querySelector('h1')
let botao = document.getElementById('btn')
function setUser(){
    const myName = prompt('Digite seu nome: ')
    localStorage.setItem('name', myName)
        titulo.textContent = myName
    
}

botao.onclick = () => {
    setUser()
}

