function bhaskara(formula) {
    var valores = formula.split(" ").filter(function (valor) { return valor !== "+"; });
    if (valores[1] === "-") {
        valores[2] = valores[2] * -1;
        valores.splice(1, 1);
        if (valores[3] === "-") {
            valores[4] = valores[4] * -1;
            valores.splice(3, 1);
        }
    }
    else if (valores[2] === "-") {
        valores[3] = valores[3] * -1;
        valores.splice(2, 1);
    }
    console.log(valores);
    var A = valores[0] === "x" ? 1 : valores[0].replace("x2", "");
    var B = valores[1].charAt(0) === "x" ? 1 : valores[1].replace("x", "");
    var C = valores[2] === "" ? 0 : valores[2];
    var delta = Math.pow(B, 2) - 4 * A * C;
    console.log("A: " + A, "B: " + B, "C: " + C, "DELTA: " + delta);
    if (delta < 0)
        return "Delta é negativo";
    else if (delta == 0) {
        return ((-1 * B) / 2) * A;
    }
    else {
        var respostasValidas = new Array(2);
        var divisor1 = -B - Math.sqrt(delta);
        var divisor2 = -B + Math.sqrt(delta);
        var doisA = 2 * A;
        var valor1 = divisor1 / doisA, valor2 = divisor2 / doisA;
        console.log(valor1, valor2);
        respostasValidas[0] = valor1;
        respostasValidas[1] = valor2;
        return respostasValidas;
    }
}
console.log(bhaskara("3x2 + 5x + 2"));
