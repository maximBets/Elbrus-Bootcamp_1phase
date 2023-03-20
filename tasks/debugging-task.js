// эта функция должна посчитать сумму цифр в этом массиве. Каждый элемент массива может быть либо
// числом либо таким же массивом. В функции допущена ошибка, что приводит к её неправильной работе.
// Примени отладку для того, чтобы найти и исправить ошибку.

const testFolder = [1, [2, [[], [3, 4]]], [], [5]];

let result = 0;

const calculateFileSize = (arr) => {
  for (let index = 0; index < arr.length; index += 1) {
    if (Array.isArray(arr[index])) {
      calculateFileSize(arr[index]);
    }

    result += arr[index];
  }

  return result;
};

// должно выдать 15
console.log(calculateFileSize(testFolder));
