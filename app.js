const stringUtils = require('./stringUtils');

console.log(stringUtils.capitalize(`hello world!`));
console.log(stringUtils.capitalize(``));
console.log(stringUtils.capitalize(1));

console.log(stringUtils.reverse(`!dlrow olleH`));
console.log(stringUtils.reverse(1234));
console.log(stringUtils.reverse(``));

let testString = `Hello world! I love LaunchCode!`;

console.log(stringUtils.contains(testString, `Hello`));
console.log(stringUtils.contains(testString, `LaunchCode`));
console.log(stringUtils.contains(testString, `Awesome`));
console.log(stringUtils.contains(testString, ``));
console.log(stringUtils.contains(testString, `1234`));
console.log(stringUtils.contains(testString, `skla;dfjgs;ld`));
