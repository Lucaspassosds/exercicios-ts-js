const mediaAritmetica = (vetor: Array<number>) => vetor.reduce((a,b) => a+b) / vetor.length;

console.log(mediaAritmetica([21,3,467,678,5,2,4]));