function comparaCrescimento(primeiro, segundo) {
    var maior, menor;
    if (primeiro.altura > segundo.altura) {
        maior = primeiro;
        menor = segundo;
    }
    else if (segundo.altura > primeiro.altura) {
        maior = segundo;
        menor = primeiro;
    }
    else {
        return 'As criancas tem a mesma altura';
    }
    if (maior.taxa > menor.taxa) {
        return "A crianca " + menor.nome + " numca sera maior que " + maior.nome;
    }
    else {
        var alturaMaior = maior.altura, alturaMenor = menor.altura, anos = 0;
        while (alturaMaior > alturaMenor) {
            alturaMaior = alturaMaior * maior.taxa;
            alturaMenor = alturaMenor * menor.taxa;
            anos++;
        }
        return "A crianca " + menor.nome + " ultrapassou " + maior.nome + " apos " + anos + " anos quando ela \n        estava com " + alturaMenor.toFixed(2) + "cm de altura.";
    }
}
var joao = {
    altura: 1.40,
    taxa: 1.05,
    nome: 'João'
};
var pedro = {
    altura: 1.20,
    taxa: 1.08,
    nome: 'Pedro'
};
console.log(comparaCrescimento(joao, pedro));
//# sourceMappingURL=questao-27.js.map