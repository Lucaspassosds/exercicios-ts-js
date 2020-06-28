function calculadora(expressao) {
    var valores = expressao.split(' ');
    var esq = Number(valores[0]), dir = Number(valores[2]);
    switch (valores[1]) {
        case '+':
            return esq + dir;
        case '-':
            return esq - dir;
        case '*':
            return esq * dir;
        case '/':
            return esq / dir;
    }
}
console.log(calculadora('2 + 3'));
console.log(calculadora('2 * 3'));
//# sourceMappingURL=questao-16.js.map