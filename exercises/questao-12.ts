function fatorial(valor : number) : number{
    if(valor === 1 || valor <= 0){
        return 1;
    } else{
        return valor * fatorial(valor - 1);
    }
}

console.log(fatorial(2));
console.log(fatorial(3));
console.log(fatorial(4));
console.log(fatorial(5));