//Para criar objetos-> Factory functions/ Constructor function/ Classes

//Factory->
function criaPessoa(nome, sobrenome){

    return {
        
        nome,
        sobrenome,
        get nomeCompleto() {

            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Tundê', 'Cavalcante');
console.log(p1.nomeCompleto);


//Constructor->
function Pessoa(nome, sobrenome){

    this.nome = nome;
    this.sobrenome = sobrenome;

}

const p2 = new Pessoa('Tundê', 'Cavalcante')
console.log(p2);