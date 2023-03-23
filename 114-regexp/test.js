{
  const re = /ab/;

  // test - есть ли в строке подстрока (регулярное выражение)
  console.log(/рок/.test('test - есть ли в строке подстрока (регулярное выражение)'));
  console.log(re.test('ab'));
  console.log(re.test('>'));
  console.log(re.test('>ab'));
}

{
  // выражение для одного символа алфавита либо цифры либо _
  const re = /a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|1|2|3|4|5|6|7|8|9|0|_/;

  console.log(re.test('a'));
  console.log(re.test('>'));
  console.log(re.test('>a'));
}

{
  // Можем искать одно из слов (больше одного символа)
  const re = /привет|пока/;

  console.log(re.test('привет, Артём!'));
  console.log(re.test('пока, Артём!'));
  console.log(re.test('уходи, Артём'));
}

{
  // диапазон - один символ из перечисленных
  const re = /[ab]b/;

  console.log(re.test('ab'));
  console.log(re.test('bb'));
  console.log(re.test('>a'));
}

{
  // диапазон - один символ из перечисленных
  const re = /[abcdefghijklmnopqrstuvwxyz1234567890_]/;

  console.log(re.test('a'));
  console.log(re.test('>'));
  console.log(re.test('>a'));
}

{
  // диапазон - один символ из перечисленных
  // тире обозначает диапазон только внутри квадратных скобок
  const re = /[a-z0-9_]/;

  console.log(re.test('ё'));
  console.log(re.test('5'));
  console.log(re.test('>'));
  console.log(re.test('>a'));
}

{
  // обратный диапазон - символ не должен входить в этот диапазон
  // ^ - это не
  const re = /[^a-z0-9_]/;

  console.log(re.test('a'));
  console.log(re.test('>'));
  console.log(re.test('>a'));
}

{
  // символьный класс
  // \w - буквы, цифры, _: [a-z0-9_], не работает с русскими буквами
  // \s - пробельные символы (" ", "\n", "\t")
  // \d - цифры
  // \W - всё кроме букв, цифр и _
  // \S - непробельные символы
  // \D - не цифры
  const re = /\w/;

  console.log(re.test('a'));
  console.log(re.test('>'));
  console.log(re.test('>a'));
}

{
  const str = 'abc@mail.com';
  // () - группы
  const re = /\w\w\w@\w\w\w\w.(com|ru)/;

  console.log(re.test(str));
}

{
  // квантификаторы
  // {n} - n символов
  // {n,m} - от n до m символов
  // {n,} - от n до бесконечности
  // {0,1} - ?
  // {0,} - *
  // {1,} - +

  const str = '@mail.com';
  const re = /\w+@\w{4}.(com|ru)/;
  console.log(re.test(str));

  const str2 = 'abc_1223@mail.com';
  const re2 = /\w+@\w+.(com|ru)/;
  console.log(re2.test(str2));
}

{
  const str = 'abc_1223@mail.com';
  // . - любой символ, если нужна точка, нужно экранировать
  const re = /\w+@\w+\.(com|ru)/;

  console.log(re.test(str));
}

{
  const str = 'dkfjdkfda@mail.com--dfsdfd-';
  const re = /\w@\w+\.(com|ru)/;

  console.log(re.test(str));
}

{
  // якоря
  // ^ - начало строки
  // $ - конец строки
  const str = `aaa@mail.com0---`;
  const re = /^\w@\w+\.(com|ru)$/;

  console.log(re.test(str));
}

{
  const str = 'abc_1223@mail.com';
  const re = /^\w+@\w+\.(com|ru)$/;

  console.log(re.test(str));
}
