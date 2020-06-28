function isDiaUtil(dia : number): boolean{
    switch(dia){
        case 1:
        case 7:
            return false;
        default:
            return true;
    }
}

const dias = {
    domingo: 1,
    segunda: 2,
    terca: 3,
    quarta: 4,
    quinta: 5,
    sexta: 6,
    sabado: 7,
}

console.log(isDiaUtil(dias.sabado));
console.log(isDiaUtil(dias.segunda));