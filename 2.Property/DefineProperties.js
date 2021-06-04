
function Produto(nome, preço, codigo) {

    this.nome = nome;
    this.preço = preço;
    
    Object.defineProperties(this, {

        nome: {

            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        
        
        preço: {

            enumerable: true,
            value: preço,
            writable: true,
            configurable: true
        },

            
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

