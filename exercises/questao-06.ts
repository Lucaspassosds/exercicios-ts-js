const jurosSimples = (capital : number, taxa : number, tempo : number) => capital+(capital*taxa*tempo);
const jurosCompostos = (capital : number, taxa : number, tempo : number) => capital*Math.pow(1+taxa, tempo);

console.log(jurosSimples(1000, 0.1, 12));
console.log(jurosCompostos(1000, 0.1, 12).toFixed(2));