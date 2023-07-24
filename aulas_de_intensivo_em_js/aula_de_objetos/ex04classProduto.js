class Produto {
    constructor(nome, preço, quantidade){
        this.nome = nome
        this.preço = preço 
        this.quantidade = quantidade
    }
    valor(){
        console.log(`E produto se chama${this.nome} custa ${this.preço} tem em estoque ${this.quantidade}`)
    }    
}

let objeto = [{  }]

objeto.tv = new Produto("sangSung", 1.200, 2)
objeto.video = new Produto('PlayTation 5', 5.000, 5)
console.log(objeto)
let somaEstoque = objeto.filter(function(produto, indice, array){
    return produto
})
console.log(somaEstoque)