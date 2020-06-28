function avaliarIntervalo(vetor: Array<number>) {
    let noIntervalo = 0, foraDoIntervalo = 0;
    vetor.forEach(valor =>{
        if(valor >= 10 && valor <= 20){
            noIntervalo ++;
        } else {
            foraDoIntervalo ++;
        }
    });
    return `O vetor tem ${noIntervalo} valores dentro do intervalo e ${foraDoIntervalo} valores fora`;
}

console.log(avaliarIntervalo([12,3,31,43,45,53,5,13,34,14]));