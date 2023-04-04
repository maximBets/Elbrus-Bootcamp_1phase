// 3 states: Pending, Fullfiled, Rejected

const promise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
      resolve('Я успешно вылупился из промиса!');
    } else {
      reject('Я неудачно выкатился из промиса с ошибкой....');
    }
  });
  
  console.log(promise); // Объект промис
  
  //чтобы получить результат -> метод then((result)=>{})
  
  promise
    .then((value) => {
      console.log(value);
  //можно возвращать значение
      return `${value} дважды!`;
    })
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });