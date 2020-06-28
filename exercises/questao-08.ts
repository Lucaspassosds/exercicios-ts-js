function getRecordesAndPiorJogo(pontuacoes: Array<string>) {
    let numeroRecordes = 0;
    let piorJogo = 0;
    let currentRecord = 0;
    for (const pontuacao of pontuacoes) {
        const pont: number = Number(pontuacao);
        if (currentRecord !== 0) {
            if (currentRecord < pont) {
                numeroRecordes++;
            } else {
                piorJogo = pontuacoes.indexOf(pontuacao);
            }
        } else {
            currentRecord = pont;
        }
    }

    return [numeroRecordes, piorJogo + 1];
}

//RESULTADOS        RECORDS:   1º                     2º  PIOR JOGO
const lista = ["28", '24', '20', '27', '33', '12', '31'];

console.log(getRecordesAndPiorJogo(lista));