function ValidaCPF(cpfEnviado){
    
    Object.defineProperty(this, 'cpfLimpo', {

        enumerable: true,
        get: function() {

            return cpfEnviado.replace(/\D+/g, '');
        }

    })

}

ValidaCPF.prototype.valida = function() {

    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo) return false;
    
    //Para pegar os 9 primeiros dígitos do cpf 
    const cpfParcial = this.cpfLimpo.slice(0, -2); 
    const Digito1 = this.criaDigito(cpfParcial);
    const Digito2 = this.criaDigito(cpfParcial + Digito1);

    const novoCpf = cpfParcial + Digito1 + Digito2

    

    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {

    const cpfArray = Array.from(cpfParcial);
    let contador = cpfArray.length + 1;

    const total= cpfArray.reduce((ac, valor) => {

        ac += (contador * Number(valor))
        contador --;
        return ac;

    }, 0);
    
    const digito = 11 - (total % 11);
    
    return digito > 9 ? '0' : String(digito);

}


const cpf = new ValidaCPF('083.563.613-54');

if(cpf.valida()) {

    console.log('CPF válido')
}else{

    console.log('CPF inválido')
}
