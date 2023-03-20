const fs = require('fs');
const path = require('path');
const parsePhoneNumber = require('libphonenumber-js');

function listContacts() {
  // с помощью этого методы читаем контакты из файла
  // __dirname - директория, в которой лежит скрипт
  // path.join - соединить несколько сегментов пути (папка + файл)
  const data = fs.readFileSync(path.join(__dirname, 'contacts.txt'), 'utf-8');
  console.log(data);
}

function addContacts(contactType, name, value) {
  // Если контакт является телефоном то форматируем его с помощь стороннего пакет `libphonenumber-js`
  if (contactType === 'phone') {
    const parsed = parsePhoneNumber(value, 'RU');
    value = parsed.formatInternational();
  }

  const line = `${name} ${contactType} ${value}\n`;
  // перезаписывает файл полностью
  // если нет файла, то он его создаёт
  // fs.writeFileSync(path.join(__dirname, './contacts.txt'), line);

  // добавляет строчку в конец
  // если нет файла, то он его создаёт
  fs.appendFileSync(path.join(__dirname, './contacts.txt'), line);
}

module.exports = {
  listContacts,
  addContacts,
};
