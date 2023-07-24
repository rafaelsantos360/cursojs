myObject = {
  'nome': 'Rafael',
  'idade': 34,
  'cidade': 'são Paulo'
}
myObject.profissao = 'Programador'
document.querySelector('#header').innerHTML = Object.entries(myObject)