var jurosSimples = function (capital, taxa, tempo) { return capital + (capital * taxa * tempo); };
var jurosCompostos = function (capital, taxa, tempo) { return capital * Math.pow(1 + taxa, tempo); };
console.log(jurosSimples(1000, 0.1, 12));
console.log(jurosCompostos(1000, 0.1, 12).toFixed(2));
