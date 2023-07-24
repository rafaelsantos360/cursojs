let pessoa = {
  'nome': 'Rafael',
  'idade': 34,
  'cidade': 'São Paulo'
}
pessoa.profissão = 'Programador'
document.querySelector('#header').innerHTML = Object.entries(pessoa)