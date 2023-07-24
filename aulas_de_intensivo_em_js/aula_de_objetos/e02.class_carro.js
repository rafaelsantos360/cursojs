class Carro{
    constructor(marca, modelo, ano, preço){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.preço = preço
}
    mostrarVeiculo(){
        console.log(`O veiculo da ${this.marca} do modelo ${this.modelo} produzido em ${this.ano} no valor ${this.preço}`)
    }
}

loja = [{ }]

loja.carro = new Carro('Fiat', '500e', 2021, 20.000)
loja.moto = new Carro('Suzuki', '165 - e8', 2000, 15.000)
console.log(loja.sort())