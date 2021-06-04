//DefineProperty / defineProperties
//Caso eu queria travar uma propriedade de um objeto para qu ela n seja alterada 


function Produto(nome, preço, codigo) {

    this.nome = nome;
    this.preço = preço;
    //Caso eu queira que o codigo seja privado.
    Object.defineProperty(this, 'codigo', {

        //Para mostrar a chave
        enumerable: true,
        //Valor que a variável vai ter
        value: codigo,
        //Pode alterar o valor ou não
        writable: false,
        //Pode editar, reconfigurar ou apagar a chave
        configurable: false

    });

    
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

//Para ver as chaves do Objeto em um Array
console.log(Object.keys(p1));
