function hasSameChars(str1, str2) {
    var conjuntoChars1 = str1.split('').filter(function (v, i, a) { return a.indexOf(v) === i; });
    var conjuntoChars2 = str2.split('').filter(function (v, i, a) { return a.indexOf(v) === i; });
    if (JSON.stringify(conjuntoChars1.sort()) === JSON.stringify(conjuntoChars2.sort()))
        return true;
    else
        return false;
}
console.log(hasSameChars('banana', 'ananab'));
//# sourceMappingURL=questao-34.js.map