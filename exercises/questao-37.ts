function progressaoAritmetica(qtdTermos: number, primeiroTermo: number, razao: number): Object {
    const result = {
        termos: [],
        soma: 0,
    };
    for (let i = 1; i <= qtdTermos; i++) {
        result.termos.push(primeiroTermo + (i - 1) * razao);
    }
    result.soma = result.termos.reduce((a, b) => a + b);
    return result;
};

function progressaoGeometrica(qtdTermos: number, primeiroTermo: number, razao: number): Object {
    const result = {
        termos: [],
        soma: 0,
    };

    for (let i = 1; i <= qtdTermos; i++) {
        result.termos.push(primeiroTermo * Math.pow(razao, i - 1));
    }
    result.soma = result.termos.reduce((a, b) => a + b);

    return result;
}

console.log(progressaoAritmetica(5, 2, 3));
console.log(progressaoGeometrica(5, 2, 3));