// деструктуризация
const { listContacts, addContacts } = require('./library');

const command = process.argv[2];

if (command === 'list') {
  listContacts();
} else if (command === 'add') {
  // берём данные, которые пользователь ввёл в терминал
  const contactType = process.argv[3];
  const name = process.argv[4];
  const value = process.argv[5];

  addContacts(contactType, name, value);
} else {
  console.error('Неправильно введена команда');
}
