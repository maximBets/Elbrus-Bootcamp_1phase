const { fetch } = require('./lib');

// последовательное выполнение асинхронных запросов
// callback hell
fetch(`http://localhost:3000/?text=Hello!`, (error1, data1) => {
  console.log(data1);

  fetch(`http://localhost:3000/?text=World!`, (error2, data2) => {
    console.log(data2);

    fetch(`http://localhost:3000/?text=Privet, Andrey!`, (error3, data3) => {
      console.log(data3);

      fetch(`http://localhost:3000/?text=Privet, Leopards!`, (error4, data4) => {
        console.log(data4);

        fetch(`http://localhost:3000/?text=Gooooooodbye!`, (error5, data5) => {
          console.log(data5);
        });
      });
    });
  });
});
