function valorPlano(idade) {
    if (idade > 0) {
        if (idade < 10) {
            return 180;
        }
        else if (idade >= 10 && idade < 30) {
            return 150;
        }
        else if (idade >= 30 && idade < 60) {
            return 195;
        }
        else {
            return 230;
        }
    }
    else {
        throw "Idade invalida.";
    }
}
console.log(valorPlano(1));
console.log(valorPlano(55));
console.log(valorPlano(97));
//# sourceMappingURL=questao-21.js.map