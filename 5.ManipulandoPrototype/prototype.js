// new Object -> Object.prototype
const objA ={

    chaveA: 'A',
//  __proto__: Object.prototype    

};

const objB = {

    chave: 'B',
//__proto__: ObjA   

};
//Escolhendo um objeto para ser protótipo de outro.
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);