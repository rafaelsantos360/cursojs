class Pessoa{
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
}
Pessoa.prototype.complimentar = () => {
    console.log(`Olá meu nome ${this.nome} tenho ${this.idade} e minha altura é ${this.altura}`)
}

let listaDepessoas = [
    new Pessoa('Rafael', 34, 1.70), 
    new Pessoa('Marisa', 58, 1.58)
]

let menorAltura = listaDepessoas.filter(function(v, i, arr){
        return v.altura <=1.6
})
console.log(menorAltura)