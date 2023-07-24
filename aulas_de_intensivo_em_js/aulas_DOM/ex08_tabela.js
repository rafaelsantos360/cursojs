let tabela = document.getElementById('tabela')
let dados = document.querySelectorAll('td')
dados.forEach(function(v, i, arr) {
    arr[i].addEventListener('click', () => {
        arr[i].style.color = 'red'
    })
})