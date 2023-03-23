// {
//   const str = 'Моя почта: abc_1223@mail.com. А телефон не скажу';
//   const re = /\w+@\w+\.(com|ru)/;

//   console.log(str.replace(re, '***'));
// }

// {
//   const str = 'Моя почта: abc_1223@mail.COM либо second@yandex.RU. А телефон не скажу';
//   // флаг g - глобальный поиск (global)
//   // флаг i - игнорирование регистра (case insensitive)
//   const re = /\w+@\w+\.(com|ru)/gi;

//   console.log(str.replace(re, '***'));
// }

// {
//   const str = 'Моя почта: abc_1223@mail.com либо second@yandex.ru. А телефон не скажу';

//   const re = /\w+@\w+\.(com|ru)/g;
//   // можно вторым параметром передавать коллбэк
//   console.log(str.replace(re, (email) => email.toUpperCase()));
// }

// {
//   const str = 'Моя почта: abc_1223@mail.com либо second@yandex.ru. А телефон не скажу';

//   // группы - то что находится в круглых скобках
//   const re = /(\w+)@(\w+)\.(com|ru)/g;

//   console.log(
//     str.replace(re, (email, left, right, domain) => `${right}@${left}.${domain}`)
//   );
// }

// {
//   const str = 'Моя почта: abc_1223@mail.com либо second@yandex.ru. А телефон не скажу';

//   // группы - то что находится в круглых скобках
//   // $1 - первая группа
//   // $& - вся подстрока
//   const re = /(\w+)@(\w+)\.(com|ru)/g;

//   console.log(str.replace(re, '$2@$1.$3'));
// }
