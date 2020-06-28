function valorNotas(valor) {
    var notas = {
        100: 0,
        50: 0,
        10: 0,
        5: 0,
        1: 0
    };
    //cria um array com todos os tipos de nota em ordem crescente
    var notasKeys = Object.keys(notas).map(function (valor) { return Number(valor); });
    //deixa o array decrescente(de 100 a 1)
    notasKeys.reverse();
    //itera pelo array
    notasKeys.forEach(function (nota) {
        if (valor >= nota) {
            notas[nota] = notas[nota] + Math.floor(valor / nota);
            valor = valor % nota;
        }
    });
    var notasEntries = Object.entries(notas);
    for (var _i = 0, notasEntries_1 = notasEntries; _i < notasEntries_1.length; _i++) {
        var _a = notasEntries_1[_i], nota = _a[0], qtd = _a[1];
        if (qtd != 0) {
            console.log(qtd + ' nota(s) de R$' + nota);
        }
    }
}
valorNotas(101);
//# sourceMappingURL=questao-20.js.map