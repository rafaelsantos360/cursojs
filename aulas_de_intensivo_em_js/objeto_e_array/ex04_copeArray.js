let lista1 = []
lista1.push('Ana', 'Bruno', 'Caio', 'Denise')
let lista2 = []
let lista = lista2.concat(lista1)
lista.splice(2,2)

document.querySelector('#header').innerHTML = lista