
const now = new Date(); 

console.log(dateFns.isToday(now)); 
// true 

// Si le pasamos a new Date() una serie de números, es más que probable que entonces sea false, al considerar que no es justo ahora. 

// En este caso como se crea fecha y hora en el momento de ejecutar, nos dará como resultado true. 


// Formateo (algunos ejemplos) con los tokens de Date-fns
// https://date-fns.org/v2.17.0/docs/format

console.log(dateFns.format(now, 'YYYY'))
// 2021 (por ejemplo, depende de cuando se ejecute el código al ser "now")

console.log(dateFns.format(now, 'MMMM')); 
// February 

console.log(dateFns.format(now, 'MMM')); 
// Feb 

console.log(dateFns.format(now, 'dddd')); 
// Thursday

console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'))
// Thursday, 18th, February, 2021



//Comparing dates 

const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before))

// about 2 years 

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));

// about 2 years ago
