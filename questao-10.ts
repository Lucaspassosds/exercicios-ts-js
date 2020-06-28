function isDivisivelPor3(valor: number): boolean {

    const digitos: Array<number> = String(valor).replace(/\D/g, '0')
        .split('').map(valor => Number(valor));
    if(digitos.reduce((a,b) => a+b) % 3 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(isDivisivelPor3(81));
console.log(isDivisivelPor3(20));