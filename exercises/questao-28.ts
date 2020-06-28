function getParesImpares(vetor: Array<number>) {
    let pares = 0, impares = 0;
    vetor.forEach(valor => {
        if(valor % 2 === 0){
            pares ++;
        } else {
            impares ++;
        }
    });
    return `O vetor tem ${pares} valores pares e ${impares} valores impares`;
}

//IMPARES: 7    PARES: 4
console.log(getParesImpares([15,23,451,123,43,42,4,5,68,8,767]));