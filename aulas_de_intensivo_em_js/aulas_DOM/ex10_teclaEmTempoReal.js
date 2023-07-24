let texto = document.getElementById('tx')
let res = document.getElementById('res')

texto.addEventListener('keydown', function() {
    res.innerHTML = texto.value
})
