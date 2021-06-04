//Como copiar um objeto

const produto = {nome: 'Caneca', preço: 1.8};
const teste = {...produto};

teste.nome = 'Outro nome';

console.log(produto);
console.log(teste);
