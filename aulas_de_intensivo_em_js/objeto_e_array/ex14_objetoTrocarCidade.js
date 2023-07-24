let pessoa = {
  'nome': 'Marisa',
  'idade': 58,
  'cidade': 'Bahia'
}
pessoa.cidade = 'São Paulo'
document.querySelector('#header').innerHTML = Object.entries(pessoa)