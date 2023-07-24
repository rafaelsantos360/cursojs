let formulario = document.getElementById('form')
let res = document.createElement('res')
document.body.appendChild(res)
let botao = document.querySelector('#btn')
botao.addEventListener('click', () => {
    res.innerHTML = formulario.value
    alert(`O valores do fomulario enviados ${formulario.value}`)
})
