let carro = {marca: 'Fiat', modelo: '500e', ano: 2021}
carro.cor = 'Azul'
document.querySelector('#header').innerHTML = Object.entries(carro)