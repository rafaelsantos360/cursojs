let senha1 = document.getElementById('sen1')
let senha2 = document.getElementById('sen2')
senha2.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        alert('Enviado')
    }
})

