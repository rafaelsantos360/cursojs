pessoa = {
  'nome': 'Marisa',
  'idade': 58,
  'cidade': 'São Paulo'
}

document.querySelector('#header').innerHTML = Object.entries(pessoa)
