function verificar() {
    window.alert('funcionou')
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto') 

    if(fano.value.length  <= 0 || fano.value > ano) {
        window.alert ('Verifique os dados e tente novamente!')
    } else {
            var fsex = document.getElementsByName('radsex')
            var idade  = ano - Number(fano.value)
            var genero = ''
            if(fsex[0].checked) {
                genero = 'Homem'
                if(idade < 12) {
                    //Criança
                    img.setAttribute('src', 'kid-m.png')
                }else if(idade < 18) {
                    //Adolecente
                    img.setAttribute('src', 'teen-m.png')
                }else if(idade < 60){
                    //Adulto
                    img.setAttribute('src', 'adulto-m.png')
                }else{
                    //Idoso
                    img.setAttribute('src', 'idoso-m.png')
                }
            }else if(fsex[1].checked){
                genero = 'Mulher'
                if(idade < 12) {
                //Criança
                img.setAttribute('src', 'kid-f.png')
                }else if(idade < 18) {
                //Adolecente
                img.setAttribute('src', 'teen-f.png')
                }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
                }else{
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
                }
            }

        }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
   
}