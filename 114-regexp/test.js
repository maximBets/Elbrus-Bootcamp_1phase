// {
//   // выражение для одного символа алфавита либо цифры либо _
//   const re =
//     /(a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|1|2|3|4|5|6|7|8|9|0|_)/;

//   console.log(re.test('a'));
//   console.log(re.test('>'));
//   console.log(re.test('>a'));
// }

// {
//   // Можем искать одно из слов (больше одного символа)
//   const re = /(привет|пока)/;

//   console.log(re.test('привет, Артём!'));
//   console.log(re.test('пока, Артём!'));
//   console.log(re.test('уходи, Артём'));
// }

// {
//   // диапазон - один символ из перечисленных
//   const re = /[abcdefghijklmnopqrstuvwxyz1234567890_]/;

//   console.log(re.test('a'));
//   console.log(re.test('>'));
//   console.log(re.test('>a'));
// }

// {
//   // диапазон - один символ из перечисленных
//   const re = /[a-z0-9_]/;

//   console.log(re.test('a'));
//   console.log(re.test('>'));
//   console.log(re.test('>a'));
// }

// {
//   // обратный диапазон - один символ из перечисленных
//   const re = /[^a-z0-9_]/;

//   console.log(re.test('a'));
//   console.log(re.test('>'));
//   console.log(re.test('>a'));
// }

// {
//   // символьный класс
//   // \w - буквы, цифры, _
//   // \s - пробельные символы (" ", "\n", "\t")
//   // \d - цифры
//   // \W - всё кроме букв, цифр и _
//   // \S - непробельные символы
//   // \D - не цифры
//   const re = /\w/;

//   console.log(re.test('a'));
//   console.log(re.test('>'));
//   console.log(re.test('>a'));
// }

// {
//   const str = 'abc@mail.com';
//   const re = /\w\w\w@\w\w\w\w.(com|ru)/;

//   console.log(re.test(str));
// }

// {
//   const str = 'abc_1223@mail.com';
//   // квантификаторы
//   // {n} - n символов
//   // {n,m} - от n до m символов
//   // {n,} - от n до бесконечности
//   // {,n} - от 0 до n
//   // {0,1} - ?
//   // {0,} - *
//   // {1,} - +
//   const re = /\w+@\w+.(com|ru)/;

//   console.log(re.test(str));
// }

// {
//   const str = 'abc_1223@mail.com';
//   // . - любой символ, если нужна точка, нужно экранировать
//   const re = /\w+@\w+\.(com|ru)/;

//   console.log(re.test(str));
// }

// {
//   const str = 'abc_1223@mail.com';
//   // якоря
//   // ^ - начало строки
//   // $ - конец строки
//   const re = /^\w+@\w+\.(com|ru)$/;

//   console.log(re.test(str));
// }
