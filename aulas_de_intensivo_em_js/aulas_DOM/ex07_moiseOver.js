let titulo = document.querySelector('h1')
titulo.textContent = 'MouseOver'
let caixaDeTesto = document.getElementById('tx')

caixaDeTesto.addEventListener('mouseover', () => {
    caixaDeTesto.style.background = 'red'
})
