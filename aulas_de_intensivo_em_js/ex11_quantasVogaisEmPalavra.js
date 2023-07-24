let palavra = prompt('Digite palavra: ')

let cont = 0

for(let c in palavra){
    if(palavra[c] === 'a' || palavra[c] === 'e' || palavra[c] === 'i' || palavra[c] === 'o' || palavra[c] === 'u' || palavra[c] === 'A' || palavra[c] === 'E' || palavra[c] === 'I' || palavra[c] === 'O' || palavra[c] === 'U')
            /* Bloco de ação*/
    {
        cont += 1
        console.log(palavra[c])
        console.log(cont) 
    }
      
}
