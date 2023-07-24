let pessoa = {
  nome: 'rafael', idade: 34, cidade: 'São Paulo',
  mostraDados: function(){
    console.log(`Eu moro ${this.cidade} e tenho ${this.idade}`)
  }
}
pessoa.mostraDados()
