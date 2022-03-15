function verificar() {
    var pais = window.document.querySelector('input#txtpais')
    var res = window.document.querySelector('div#res')
    var valor = (pais.value)

    res.innerHTML = `<p>Seu pais é ${valor}</p>`
 if (valor == 'Brasil') {
     res.innerHTML += `<p>Você é BRASILEIRO!</p>`
 } elso
     {
        res.innerHTML += '<p>Você é ESTRANGEIRO!</p>'
 }
}

