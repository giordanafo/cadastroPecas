let peso = 150;

if (peso > 100) {
    console.log ("Peça com peso OK para cadastro");
}
else console.log ("Peça abaixo do peso");



let listaPecas = ['Ignição', 'Pistão', 'Suspensão', 'Cambio', 'Biela', 'Cabeçote', 'Amortecedor'];

if (listaPecas.length > 10) {
    console.log ("Capacidade de armazenamento insuficiente");
}
else console.log ("Capacidade de armazenamento OK");


if (listaPecas[0].length < 3){
    console.log ("Peça com nome menor que o requisitado");
}
else console.log ("Peça com nome OK");