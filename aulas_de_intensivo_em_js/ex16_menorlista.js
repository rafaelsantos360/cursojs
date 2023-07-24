lista = [5, 6, 3, 8, 2]
let men = 0
for(let c = 0; c < lista.length; c++){
    if(c == 0 || lista[c] < men){
        men = lista[c]
        alert(men)
    }
    
}