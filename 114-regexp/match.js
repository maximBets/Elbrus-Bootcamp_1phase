// {
//   const str = 'Моя почта: abc_1223@mail.com либо second@yandex.ru. А телефон не скажу';

//   const re = /(\w+)@(\w+)\.(com|ru)/g;
//   const emails = str.match(re);

//   // match - вытащить все совпадения с шаблоном из строки
//   console.log(emails);
// }

// {
//   const str = 'Моя почта: abc_1223@mail.com либо second@yandex.ru. А телефон не скажу';

//   // удаляем флаг g, чтобы вытащить первый email с его составными частями (группами)
//   const re = /(\w+)@(\w+)\.(com|ru)/;
//   const match = str.match(re);

//   // match - вытащить все совпадения с шаблоном из строки
//   console.log(match);
// }

// {
//   const str = 'Моя почта: abc_1223@mail.com либо second@yandex.ru. А телефон не скажу';

//   // возвращаем флаг g
//   const re = /(\w+)@(\w+)\.(com|ru)/g;
//   // matchAll - позволяет вытащить все вхождения регулярного выражения вместе с группами
//   const match = str.matchAll(re);

//   const matchesArray = [...match];

//   console.log(matchesArray);
// }
