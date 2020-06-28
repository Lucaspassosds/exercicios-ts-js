function definirAprovacao(notas: [number, number, number]): string {
    let cumulativo = 0;
    notas.forEach(nota => {
        if (nota === Math.max.apply(null, notas)) {
            cumulativo += nota * 4;
        } else {
            cumulativo += nota * 3;
        }
    });
    if (cumulativo / 10 >= 5) {
        return 'APROVADO';
    } else {
        return 'REPROVADO';
    }
}

console.log(definirAprovacao([1,4,9]));
console.log(definirAprovacao([5,3,6]));
console.log(definirAprovacao([7,8,9]));