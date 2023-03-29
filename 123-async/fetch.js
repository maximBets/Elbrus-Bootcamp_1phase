const { fetchSync } = require('./lib');

// 0.5 s
const result1 = fetchSync(`https://express-figlet.onrender.com/?text=Hello!`);
console.log(result1);

// 0.5 s
const result2 = fetchSync(`https://express-figlet.onrender.com/?text=World!`);
console.log(result2);

// 0.5 s
const result3 = fetchSync(`https://express-figlet.onrender.com/?text=Privet, Andrey!`);
console.log(result3);

const result4 = fetchSync(`https://express-figlet.onrender.com/?text=Privet, Leopards!`);
console.log(result4);

const result5 = fetchSync(`https://express-figlet.onrender.com/?text=Gooooooodbye!`);
console.log(result5);
