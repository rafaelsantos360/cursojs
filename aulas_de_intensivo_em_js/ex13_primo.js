let primo = function(n){
    let somaPri = 0
    for(let i = 0; i < n + 1; i++){
        if(n % i == 0 ){
            somaPri += 1
        }
    }
    return somaPri
}

let numero = prompt('Digite numero: ')
let res = primo(numero)
switch(res){
    case 2:
        alert('Primo!')
        break
    default:
        alert('Não é primo!')

}