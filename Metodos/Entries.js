const produto = {nome: 'Produto', preço: 1.8};
//Coloca o objeto em um array
console.log(Object.entries(produto));

//Usando for
const camisa = {nome: 'camisa', preço: 26, material: 'algodão'};

for(let valor of Object.entries(camisa)){
    console.log(valor);
}