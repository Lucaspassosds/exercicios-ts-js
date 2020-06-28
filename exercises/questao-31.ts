const getNegativos = (vetor: Array<number>) => 
vetor.filter(valor => valor < 0).length;

console.log('Quantidade de negativos: '+getNegativos([12,-31,-33,-1,2,-3,-1,3,2,-13]));