const { decode, encode } = require('./encryption');

console.log(encode(`This is secret. Message about "_" symbol!`, 7));
console.log(decode(`Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`, 7));