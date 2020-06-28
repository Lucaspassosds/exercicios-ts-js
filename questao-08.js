function getRecordesAndPiorJogo(pontuacoes) {
    var numeroRecordes = 0;
    var piorJogo = 0;
    var currentRecord = 0;
    for (var _i = 0, pontuacoes_1 = pontuacoes; _i < pontuacoes_1.length; _i++) {
        var pontuacao = pontuacoes_1[_i];
        var pont = Number(pontuacao);
        if (currentRecord !== 0) {
            if (currentRecord < pont) {
                numeroRecordes++;
            }
            else {
                piorJogo = pontuacoes.indexOf(pontuacao);
            }
        }
        else {
            currentRecord = pont;
        }
    }
    return [numeroRecordes, piorJogo + 1];
}
//RESULTADOS        RECORDS:   1º                     2º  PIOR JOGO
var lista = ["28", '24', '20', '27', '33', '12', '31'];
console.log(getRecordesAndPiorJogo(lista));
