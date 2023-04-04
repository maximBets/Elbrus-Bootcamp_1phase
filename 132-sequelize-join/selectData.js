/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
const { sequelize } = require('./models');

async function main() {
  // contact = {id, name, value, kind, icon}

  // вытаскиваем все контакты
  // деструктуризация массива (первый элемент пойдёт в contacts)
  const [contacts, metdata] = await sequelize.query('SELECT * FROM "Contacts"');

  for (const contact of contacts) {
    // присоединяем к каждому имя человека
    const [people] = await sequelize.query('SELECT name FROM "People" WHERE id = ?', {
      replacements: [contact.person_id],
    });
    const person = people[0];
    contact.name = person.name;

    // присоединяем к каждому иконку контакта
    const [kinds] = await sequelize.query('SELECT icon FROM "ContactsKinds" WHERE kind = ?', {
      replacements: [contact.kind],
    });
    const kind = kinds[0];
    contact.icon = kind.icon;
  }

  for (const contact of contacts) {
    console.log(`${contact.icon} ${contact.name} ${contact.value}`);
  }

  // закрываем соединение
  await sequelize.close();
}

main();
