function elevar(base : number, expoente : number) : number {
    let result = base;
    for(let i = 1; i<expoente; i++){
        result = result * base;
    }
    return result;
}

console.log(elevar(2,11));