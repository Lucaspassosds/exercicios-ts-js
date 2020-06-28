const getMaiorMenor = (vetor: Array<number>) => 
`MAIOR VALOR: ${Math.max.apply(null, vetor)}\n MENOR VALOR: ${Math.min.apply(null, vetor)}`;
;

console.log(getMaiorMenor([2,3,45,43,647,58,984,65,421,312,5,665]));