var Triangulo = /** @class */ (function () {
    function Triangulo(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    Triangulo.prototype.tipoTriangulo = function () {
        var _a = this, lado1 = _a.lado1, lado2 = _a.lado2, lado3 = _a.lado3;
        if (lado1 == lado2) {
            if (lado1 == lado3) {
                return "Equilátero";
            }
            else {
                return "Isósceles";
            }
        }
        else if (lado1 == lado3 || lado2 == lado3) {
            return "Isósceles";
        }
        else {
            return "Escaleno";
        }
    };
    return Triangulo;
}());
var meuTriangulo = new Triangulo(3, 3, 3);
var meuTriangulo2 = new Triangulo(1, 3, 3);
var meuTriangulo3 = new Triangulo(3, 5, 6);
console.log(meuTriangulo.tipoTriangulo());
console.log(meuTriangulo2.tipoTriangulo());
console.log(meuTriangulo3.tipoTriangulo());
