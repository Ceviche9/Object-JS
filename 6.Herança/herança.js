//Produto -> aumento, desconto
//Camiseta- cor, Caneca -  material, Lápis - cor

//Com a herança você pode reutilizar um código e sobrescrever aquilo que não vai precisar


function Produto(nome, preço){

    this.nome = nome;
    this.preço = preço;
}

Produto.prototype.aumento = function(valor) {

    this.preço += valor

};

Produto.prototype.desconto = function(valor) {

    this.preço -= valor

};

function Camiseta(nome, preço, cor) {

    //Chamando o construtor do Produto
    Produto.call(this, nome, preço);
    this.cor = cor;
}

//Para fazer com que o prototype do Produto possa ser usadp na camiseta->
//Cria um objeto vazio dentro da Camiseta e conecta o prototype dele com o do produto 
Camiseta.prototype = Object.create(Produto.prototype);
//Para que o constructor da Camiseta volte a ser Camiseta->
Camiseta.prototype.constructor = Camiseta;

//Sobrescrevendo o aumento->
Camiseta.prototype.aumento = function(percentual){

    this.preço = this.preço + (this.preço * (percentual/100))
}

const camiseta = new Camiseta('regata', 7.5, 'preta');
camiseta.aumento(10);
console.log(camiseta);


function Caneca(nome,preço, material, estoque){

    Produto.call(this, nome, preço);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {

        enumerable: true,
        configurable: false,

        get: function() {

            return estoque
        },

        set: function(valor) {

            if(typeof valor !== 'number') return;
            estoque = valor; 

        }

    })

}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const caneca1 = new Caneca('Batman', 250, 'plastico', 25);

console.log(caneca1);
console.log(caneca1.material);


//da aula ->

/*
O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente). Por isso estamos usando esse termo para descrever o comportamento desejado. Além disso, a maioria das literaturas, incluindo as documentações (como MDN) citam a palavra herança.

Vamos continuar usando o termo "Herança" até o final do curso, porém, Javascript não é uma linguagem que apresenta essa característica em específico, portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". Esse seria o termo mais correto para descrever "Herança" em JS.

Quando fazemos algo como:

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
 
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
 
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Mais especificamente no trecho:

Camiseta.prototype = Object.create(Produto.prototype);
Estamos, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype. Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto. Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para Produto.prototype (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo delegação como mais adequado para este comportamento.

Novamente, vamos continuar usando o termo "Herança", mas achei que seria interessante que você soubesse disso neste momento.
*/