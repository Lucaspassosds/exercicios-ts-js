function calculadora(expressao: string): number{

    const valores = expressao.split(' ');
    const esq = Number(valores[0]), dir = Number(valores[2]);
    switch(valores[1]){
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