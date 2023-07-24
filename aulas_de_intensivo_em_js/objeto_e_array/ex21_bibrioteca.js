let biblioteca = [{livro: 'Harry potter', altor: 'Jane'}, {livro: 'Senhor dos aneis', autor: 'JJ Touken'}]
for(let i = 0; i < biblioteca.length; i++){
  console.log(biblioteca[i])
  document.querySelector('#header').innerHTML = biblioteca[i]
}
