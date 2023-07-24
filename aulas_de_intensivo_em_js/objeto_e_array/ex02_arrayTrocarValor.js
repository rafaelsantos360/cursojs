let numeros = [10, 20, 30, 40]
numeros[2] = 50
numeros.splice(1,1)
numeros.sort()

document.querySelector('#header').innerHTML = numeros