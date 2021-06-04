//Utilizando construtor

const pessoa = new Object();
pessoa.nome = 'Tundê';
pessoa.sobrenome = 'Cavalcante';
pessoa.idade = '21';
pessoa.falarNome = function() {
    return (`${this.nome} está falando seu nome`)
};

pessoa.getDataNascimento = function() {

    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;

};


console.log(pessoa.nome);
console.log(pessoa.falarNome());
console.log(pessoa.getDataNascimento());

for (let chave in pessoa){

    console.log(pessoa[chave]);
}