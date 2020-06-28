function avaliarAprovacao(nota: number){

    const proximoMultiploDeCinco = Math.floor(nota/5) * 5 + 5;
    
    if(proximoMultiploDeCinco >= 40 && proximoMultiploDeCinco - nota < 3 ){
        return 'APROVADO';
    } else
        return 'REPROVADO';

}

console.log(avaliarAprovacao(29));