const Shop = require('./Shop');
const Client = require('./Client');


const milk = {name: 'milk', price: 25};

const products = [{name: "hleb", price: 15}, {name: "syr", price: 30}, {name: 'milk', price: 25}]


const client = new Client("Andrey", 27, 50);
const magnit = new Shop("Magnit u doma", 1000, products);

console.log('client');
console.log(client);


console.log('magnit');
console.log(magnit);

/* 
client.buyProducts(magnit, milk);


console.log('client');
console.log(client);


console.log('magnit');
console.log(magnit);

client.lookAtProducts(magnit);  */


magnit.reviews = 5;
magnit.reviews = 4;
magnit.reviews = 3;

console.log(magnit.reviews);




