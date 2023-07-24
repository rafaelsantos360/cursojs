function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}<strong/>: horas`


    if(hora > 0 && hora <= 12) {
        //Bom dia
        img.src = 'fotomanhã.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora > 12 && hora < 18) {
        //Boa tarde
        img.src = 'fotodetrade.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}