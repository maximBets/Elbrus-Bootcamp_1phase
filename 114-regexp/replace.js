/* eslint-disable max-len */
{
  const str = 'Моя почта: abc_1223@mail.com. А телефон не скажу';
  const re = /\w+@\w+\.(com|ru)/;

  console.log(str.replace(re, '***'));
}

{
  const str = 'Моя почта: abc_1223@mail.COM либо second@yandex.RU. А телефон не скажу';
  // флаг g - глобальный поиск (global)
  // флаг i - игнорирование регистра (case insensitive)
  // флаг m - multiline, регулярка будет отдельно работать для каждого абзаца (перенос \n) внутри строки
  const re = /\w+@\w+\.(com|ru)/gi;

  console.log(str.replace(re, '***'));
}

{
  const str = 'Моя почта: abc_1223@mail.com либо second@yandex.ru. А телефон не скажу';

  const re = /\w+@\w+\.(com|ru)/g;
  // можно вторым параметром передавать коллбэк
  console.log(str.replace(re, (email) => email.toUpperCase()));
}

{
  const str = 'Моя почта: abc_1223@mail.com либо second@yandex.ru. А телефон не скажу';

  const re = /(\w+)@(\w+)\.(com|ru)/g;
  // можно вторым параметром передавать коллбэк
  console.log(str.replace(re, (email, name, host, domain) => `${host}@${name}.${domain}`));
}

{
  const str = 'Моя почта: abc_1223@mail.com либо second@yandex.ru. А телефон не скажу';

  // группы - то что находится в круглых скобках
  // $1 - первая группа
  // $& - вся подстрока
  const re = /(\w+)@(\w+)\.(com|ru)/g;

  console.log(str.replace(re, '$0$2@$1.$3'));
}

{
  const str = 'Моя почта: abc_1223@mail.com либо second@yandex.ru. А телефон не скажу';

  // $& - вся подстрока
  const re = /(\w+)@(\w+)\.(com|ru)/g;

  console.log(str.replace(re, '($&)'));
}
