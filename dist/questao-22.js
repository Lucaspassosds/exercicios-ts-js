var valorAnuidade = function (mes, valor) { return valor * Math.pow(1.05, mes); };
var meses = {
    janeiro: 1,
    fevereiro: 2,
    marco: 3,
    abril: 4,
    maio: 5,
    junho: 6,
    julho: 7,
    agosto: 8,
    setembro: 9,
    outubro: 10,
    novembro: 11,
    dezembro: 12
};
console.log(valorAnuidade(meses.julho, 1000));
//# sourceMappingURL=questao-22.js.map