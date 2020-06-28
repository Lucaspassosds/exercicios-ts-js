const findPairs = () : Array<number> => Array.from(Array(100).keys()).filter(valor => valor % 2 === 0);

console.log(findPairs());