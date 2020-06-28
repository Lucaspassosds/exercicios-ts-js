function elevar(base, expoente) {
    var result = base;
    for (var i = 1; i < expoente; i++) {
        result = result * base;
    }
    return result;
}
console.log(elevar(2, 11));
