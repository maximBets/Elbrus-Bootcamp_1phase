/* eslint-disable camelcase */
const { sequelize } = require('./models');

function createPerson(name) {
  return sequelize.query('INSERT INTO "People" (name) VALUES (?)', {
    replacements: [name],
  });
}

function createContact({ person_id, value, kind }) {
  return sequelize.query('INSERT INTO "Contacts" (person_id, value, kind) VALUES (?, ?, ?)', {
    replacements: [person_id, value, kind],
  });
}

async function main() {
  // создаём типы контактов
  await sequelize.query(`
    INSERT INTO "ContactsKinds" (kind, icon) VALUES
      ('phone', '📞'),
      ('email', '📧'),
      ('website', '🌎');
  `);
  await createPerson('Вася');
  await createPerson('Петя');
  await createPerson('Гриша');
  await createPerson("Д'Артаньян");
  await createContact({ person_id: 1, value: '+7345934234', kind: 'phone' });
  await createContact({ person_id: 1, value: '88003342343', kind: 'phone' });
  await createContact({ person_id: 1, value: 'vasya@gmail.com', kind: 'email' });
  await createContact({ person_id: 2, value: 'https://petya.org', kind: 'website' });
  await createContact({ person_id: 3, value: '+734234234234', kind: 'phone' });

  // закрываем соединение
  await sequelize.close();
}

main();
