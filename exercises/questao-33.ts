

const concatArrays = (vetorInteiro: Array<Number>, vetorString: Array<String>,
    vetorDouble: Array<Number>): Array<any> => {
    const vetor: Array<any> = vetorInteiro;
    return vetor.concat(vetorString, vetorDouble);
};

console.log(concatArrays([1,3,312,3,21], ['a','sdad','kkk','fon'], [0.1,12.301,203.123,10.3]));