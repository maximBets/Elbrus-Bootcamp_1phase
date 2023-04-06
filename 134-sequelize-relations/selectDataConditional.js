/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
const { Contact, Person, ContactKind, sequelize } = require('./db/models');

async function main() {
  // вытащить все контакты Васи вместе с их людьми и типами
  const contacts = await Contact.findAll({
    include: [
      {
        model: Person,
        where: { name: 'Вася' },
      },
      {
        model: ContactKind,
      },
    ],
  });

  for (const contact of contacts) {
    // contact.Person - у контакта есть один человек
    // contact.ContactKind - у контакта есть тип контакта
    console.log(`${contact.ContactKind.icon} ${contact.Person.name} ${contact.value}`);
  }

  // закрываем соединение
  await sequelize.close();
}

main();
