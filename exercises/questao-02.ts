class Triangulo {

  private lado1: number;
  private lado2: number;
  private lado3: number;

  constructor(lado1: number, lado2: number, lado3: number) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  tipoTriangulo() {
    const { lado1, lado2, lado3 } = this;

    if (lado1 == lado2) {
      if (lado1 == lado3) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }
    } else if (lado1 == lado3 || lado2 == lado3) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }
}


const meuTriangulo = new Triangulo(3, 3, 3);
const meuTriangulo2 = new Triangulo(1, 3, 3);
const meuTriangulo3 = new Triangulo(3, 5, 6);

console.log(meuTriangulo.tipoTriangulo());
console.log(meuTriangulo2.tipoTriangulo());
console.log(meuTriangulo3.tipoTriangulo());
