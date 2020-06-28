function imprimirImpares(inicio, fim) {
    if (inicio === void 0) { inicio = 0; }
    if (fim === void 0) { fim = 100; }
    var maior, menor;
    if (fim > inicio) {
        maior = fim;
        menor = inicio;
    }
    else {
        menor = fim;
        maior = inicio;
    }
    for (var i = menor; i < maior; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
imprimirImpares();
console.log('\n\n');
imprimirImpares(4, 14);
console.log('\n\n');
imprimirImpares(18, 2);
//# sourceMappingURL=questao-38.js.map