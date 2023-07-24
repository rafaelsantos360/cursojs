let texto = document.getElementById('txt')
let opçao = document.getElementById('op')

function setSave(v){
    localStorage.setItem('txt', v)
    alert(`O valor ${v.value} foi salvo com sucesso!`)
}

opçao.addEventListener('keydown', (event) => {
    if(event.key === 's' || event.key === 'S'){
        setSave(texto)
    }else if(event.key === 'n' || event.key === 'N'){
        alert('cancelado!')
    }
        
})
    
