myObject = {
  'nome': 'Rafael',
  'idade': 'São Paulo'
}

document.querySelector('#header').innerHTML = Object.entries(myObject).sort()