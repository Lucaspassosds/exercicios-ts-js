function trocarValores(vetor1: Array<any>, vetor2: Array<any>) : void {
    if(vetor1.length === vetor2.length){
        vetor1.forEach(valor => {
            vetor2.push(valor);
            vetor1.shift();
            vetor1.push(vetor2.shift());
        });
        console.log(vetor1);
        console.log(vetor2);
    } else {
        throw "Os vetores nao possuem o mesmo tamanho!";
    }
}

trocarValores([1,3,4,7,5], [2,8,7,9,1]);