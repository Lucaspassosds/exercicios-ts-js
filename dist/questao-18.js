var porExtenso = function (valor) {
    var result = {
        1: 'um',
        2: 'dois',
        3: 'tres',
        4: 'quatro',
        5: 'cinco',
        6: 'seis',
        7: 'sete',
        8: 'oito',
        9: 'nove',
        10: 'dez',
        "default": 'Numero fora do intervalo'
    };
    return result[valor] || result["default"];
};
console.log(porExtenso(1));
console.log(porExtenso(11));
//# sourceMappingURL=questao-18.js.map