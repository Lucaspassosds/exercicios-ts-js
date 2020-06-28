function isDivisivelPor3(valor) {
    var digitos = String(valor).replace(/\D/g, '0')
        .split('').map(function (valor) { return Number(valor); });
    if (digitos.reduce(function (a, b) { return a + b; }) % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isDivisivelPor3(81));
console.log(isDivisivelPor3(20));
