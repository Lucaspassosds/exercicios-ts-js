var getNegativos = function (vetor) {
    return vetor.filter(function (valor) { return valor < 0; }).length;
};
console.log('Quantidade de negativos: ' + getNegativos([12, -31, -33, -1, 2, -3, -1, 3, 2, -13]));
//# sourceMappingURL=questao-31.js.map