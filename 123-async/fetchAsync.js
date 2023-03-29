const { fetch } = require('./lib');

fetch(`https://express-figlet.onrender.com/?text=Hello!`, (error1, data1) => {
  if (error1) console.error(error1);
  else console.log(data1);
});

fetch(`https://express-figlet.onrender.com/?text=World!`, (error2, data2) => {
  if (error2) console.error(error2);
  else console.log(data2);
});

fetch(`https://express-figlet.onrender.com/?text=Privet, Andrey!`, (error3, data3) => {
  if (error3) console.error(error3);
  else console.log(data3);
});

fetch(`https://express-figlet.onrender.com/?text=Privet, Leopards!`, (error4, data4) => {
  if (error4) console.error(error4);
  else console.log(data4);
});

fetch(`https://express-figlet.onrender.com/?text=Gooooooodbye!`, (error5, data5) => {
  if (error5) console.error(error5);
  else console.log(data5);
});
