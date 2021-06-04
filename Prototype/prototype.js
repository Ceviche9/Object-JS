//Prototype é a base de POO
/*Todos os objetos tem uma referência interna para um protótipo (_proto_)
que vem da propriedade prototype da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

//Uma função construtora é um molde(classe)
function Pessoa(nome, sobrenome) {

    this.nome = nome,
    this.sobrenome = sobrenome
    
}

//Criando um prototype

Pessoa.prototype.Teste = 'Testando protótipos';

Pessoa.prototype.nomeCompleto = function(){

    return this.nome + ' ' + this.sobrenome; 
};

//Instância
const p1 = new Pessoa('Tundê', 'Cavalcante');
const data = new Date();

console.dir(p1.nomeCompleto());
console.dir(data);