//O getter serve para obter o valor e o setter para mudar o valor.

function Produto(nome, preço, codigo) {

    this.nome = nome;
    this.preço = preço;

    let codigoPrivado = codigo

    Object.defineProperty(this, 'codigo', {
  
        enumerable: true, //Mostra a chave 
        configurable: false, //Configurável

        //O getter vai apenas pegar o valor e exibir ele
        get : function() {

            return codigoPrivado
        },

        //Mudando o valor 
        set: function(valor) {

            //Protegendo a variável codigo de receber valores diferentes de números 
            if(typeof valor !== 'number') {
                throw new TypeError('ERRO');
            }

            codigoPrivado = valor;

        }

    });

}

const p1 = new Produto('Caderno', 23, 56);
p1.codigo = 25
console.log(p1);
console.log(p1.codigo);
