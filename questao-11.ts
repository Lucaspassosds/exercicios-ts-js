function isBissexto(ano: number) : boolean {
    if(ano % 400 !== 0 && ano % 100 === 0){
        return false;
    } else if(ano % 400 === 0 || ano % 4 === 0 ){
        return true;
    } else {
        return false;
    }
}

console.log(isBissexto(2000));
console.log(isBissexto(1000));
console.log(isBissexto(2020));
