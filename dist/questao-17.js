function calcularSalario(plano, salario) {
    var planos = {
        A: 1.10,
        B: 1.15,
        C: 1.20
    };
    if (planos[plano]) {
        return salario * planos[plano];
    }
    else {
        throw "Plano não encontrado";
    }
}
console.log(calcularSalario('A', 1000));
console.log(calcularSalario('D', 2550));
//# sourceMappingURL=questao-17.js.map