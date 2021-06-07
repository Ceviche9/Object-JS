//Polimorfismo: Fazer um método se comportar de formas diferentes em classes filhas de um mesmo pai

//No exemplo abaixo o método Sacar() se comporta de formas diferentes de acordo com o tipo da conta.

//Super classe
function Conta(agen, conta, saldo) {

    this.agen = agen;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function(valor) {

    if(this.saldo < valor){

        console.log('SALDO INSUFICIENTE')
        this.Saldo();
        return;
    }

    console.log(`Valor retirado R$ ${valor} reais`);
    this.saldo -= valor;
    this.Saldo();

}

Conta.prototype.depositar = function(valor){

    this.saldo += valor;
    this.Saldo();
}


Conta.prototype.Saldo = function(){

    console.log(`Agência/conta: ${this.agen}/${this.conta}`);
    console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`)

}

function ContaCorrente(agen, conta, saldo, limite) {

    //Herdando a "Conta"
    Conta.call(this, agen, conta, saldo, limite);
    this.limite = limite;
}

//Conectando o Protótipo.
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

//Agora sobrescreve o método sacar, pois na conta corrente ele funciona de uma forma diferente.
ContaCorrente.prototype.sacar = function(valor) {

    if(valor > this.saldo + this.limite){

        console.log('SALDO INSUFICIENTE')
        this.Saldo();
        return;
    }

    this.saldo -= valor;
    this.Saldo();

}


function ContaPolpança(agen, conta, saldo) {

    Conta.call(this, agen, conta, saldo);
}

ContaPolpança.prototype = Object.create(Conta.prototype);
ContaPolpança.prototype.constructor = ContaPolpança;


const Conta1 = new Conta(11, 03, 500);

Conta1.sacar(134);
console.log(Conta1);

console.log('---------------');

const Corrente1 = new ContaCorrente(01, 02, 120, 40);

Corrente1.sacar(130);
console.log(Corrente1);

console.log('--------------');
const Poupanca1 = new ContaPolpança(03, 04, 220);

Poupanca1.depositar(200);
console.log(Poupanca1);