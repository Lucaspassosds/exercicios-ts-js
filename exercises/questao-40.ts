function atribuirNota(notas : Array<number>) : void {
    notas.forEach(nota => {
        if(nota >= 9 && nota <= 10){
            console.log('A');
        } else if(nota >= 7 && nota < 9){
            console.log('B');
        } else if(nota >= 5 && nota < 7){
            console.log('C');
        } else if(nota < 5 && nota >= 0){
            console.log('D');
        }
    });
}

atribuirNota([1,3,4,5,4,5,6,6,7,8,9]);