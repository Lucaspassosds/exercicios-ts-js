function hasSameChars(str1: string, str2: string) : boolean {
    const conjuntoChars1 = str1.split('').filter((v, i, a) => a.indexOf(v) === i);
    const conjuntoChars2 = str2.split('').filter((v, i, a) => a.indexOf(v) === i);
    if(JSON.stringify(conjuntoChars1.sort())===JSON.stringify(conjuntoChars2.sort())) return true;
    else return false;
}

console.log(hasSameChars('banana', 'ananab'));