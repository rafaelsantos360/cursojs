let myObject = {
  'nome': 'Rafael',
  'idade': 34,
  'cidade': 'São Paulo'
}

Object.entries(myObject)


document.querySelector('#header').innerHTML = Object.entries(myObject)