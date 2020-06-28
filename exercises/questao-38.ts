function imprimirImpares(inicio = 0, fim = 100){
    let maior, menor;
    if(fim > inicio){
        maior = fim;
        menor = inicio;
    } else {
        menor = fim;
        maior = inicio;
    }
    for(let i = menor; i < maior; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
} 

imprimirImpares();
console.log('\n\n');
imprimirImpares(4, 14);
console.log('\n\n');
imprimirImpares(18, 2);