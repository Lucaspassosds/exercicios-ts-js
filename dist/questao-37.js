function progressaoAritmetica(qtdTermos, primeiroTermo, razao) {
    var result = {
        termos: [],
        soma: 0
    };
    for (var i = 1; i <= qtdTermos; i++) {
        result.termos.push(primeiroTermo + (i - 1) * razao);
    }
    result.soma = result.termos.reduce(function (a, b) { return a + b; });
    return result;
}
;
function progressaoGeometrica(qtdTermos, primeiroTermo, razao) {
    var result = {
        termos: [],
        soma: 0
    };
    for (var i = 1; i <= qtdTermos; i++) {
        result.termos.push(primeiroTermo * Math.pow(razao, i - 1));
    }
    result.soma = result.termos.reduce(function (a, b) { return a + b; });
    return result;
}
console.log(progressaoAritmetica(5, 2, 3));
console.log(progressaoGeometrica(5, 2, 3));
//# sourceMappingURL=questao-37.js.map