/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
const { Contact, Person, sequelize } = require('./db/models');

async function main() {
  const petya = await Person.findOne({ where: { name: 'Петя' }, include: [Contact] });

  // создаём для Пети ещё один контакт
  await petya.createContact({
    value: '8800565754564',
    kind: 'phone',
  });

  const email = await Contact.findOne({
    where: { kind: 'email' },
  });

  // отдаём email Пете
  await petya.addContact(email);

  // закрываем соединение
  await sequelize.close();
}

main();
