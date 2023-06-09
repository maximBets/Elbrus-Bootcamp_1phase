# 123 Rest Parameters. Материалы для самостоятельного изучения.

## Rest-параметры

Rest-параметры - это возможность передавать неопределенное количество аргументов в функцию, объединяя их в массив. В JavaScript они обозначаются тремя точками перед последним параметром функции. Например:

```javascript
function calc(operator, ...numbers) {
  if (operator === '+') {
    return numbers.reduce((acc, el) => acc + el, 0);
  } else if (operator === '*') {
    return numbers.reduce((acc, el) => acc * el, 1);
  }
}

calc('+', 1, 2, 3); // 6
calc('*', 1, 2, 3, 4); // 24
```

Функция `calc` принимает первым параметром оператор, а затем через rest-параметр `numbers` произвольное количество чисел (в виде массива). В теле функции, в зависимости от значения оператора, выполняется либо сложение, либо умножение всех переданных чисел с помощью метода `reduce`.
