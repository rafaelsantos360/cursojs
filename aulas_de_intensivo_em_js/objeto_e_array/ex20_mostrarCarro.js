carro = {marca: 'Fiat', modelo: '500e', ano: 2021, mostraCarro: function(){
  document.querySelector('#header').innerHTML = `O  modelo é ${this.modelo} e a marca${this.marca} do ${this.ano}`
}}
carro.mostraCarro()