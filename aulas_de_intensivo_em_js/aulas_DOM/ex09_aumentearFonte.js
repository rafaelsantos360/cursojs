function Avaliar(){
    let texto = document.getElementById('tx')
    let res = document.getElementById('res')
    texto.style.fontSize = '20px'
    res.innerHTML = texto.value.toLocaleUpperCase()
}