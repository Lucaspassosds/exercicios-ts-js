var mapeamento = function (vetor, modificador) {
    return vetor.map(function (v) { return v * modificador; });
};
var mapeamentoCondicional = function (vetor, modificador) {
    return vetor.map(function (v) { return v > 5 ? v * modificador : v; });
};
console.log(mapeamento([1, 2, 3, 4], 2));
console.log(mapeamentoCondicional([2, 4, 6, 8], 2));
//# sourceMappingURL=questao-36.js.map