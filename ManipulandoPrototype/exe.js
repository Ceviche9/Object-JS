function Produto(nome, preço){

    this.nome = nome;
    this.preço= preço;
}

Produto.prototype.desconto = function(percentual){

    this.preço = this.preço - (this.preço * (percentual/ 100));

};

Produto.prototype.aumenta = function(percentual){

    this.preço = this.preço + (this.preço * (percentual/100));

};

//Literal
const p2 = {

    nome: 'caneca',
    preço: 10,
};

const camisa = new Produto('camisa', 50);
camisa.desconto(100);
console.log(camisa);



//Passando os prototypes de Produto para p2->
Object.setPrototypeOf(p2, Produto.prototype);

const valor = p2.desconto(20);
console.log(`O valor da caneca com 20% de desconto é ${p2.preço}`);
console.log(p2);

//Criando um objeto e automaticamente definindo o prototype dele->
const p3 = Object.create(Produto.prototype)
p3.preço = 120;
p3.aumenta(10);
console.log(p3);