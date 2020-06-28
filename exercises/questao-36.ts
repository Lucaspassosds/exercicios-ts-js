const mapeamento = (vetor: Array<number>, modificador: number) =>
    vetor.map(v => v*modificador);
const mapeamentoCondicional = (vetor: Array<number>, modificador: number) =>
vetor.map(v => v>5 ? v*modificador : v);

console.log(mapeamento([1,2,3,4], 2));
console.log(mapeamentoCondicional([2,4,6,8], 2));