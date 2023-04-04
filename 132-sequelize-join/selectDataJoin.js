/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
const { sequelize } = require('./models');

async function main() {
  // contact = {id, name, value, kind, icon}

  // const [contacts] = await sequelize.query(`
  //   SELECT * FROM "Contacts"
  //   JOIN "People" ON "Contacts".person_id = "People".id
  //   JOIN "ContactsKinds" ON "Contacts".kind = "ContactsKinds".kind
  // `);
  const [contacts] = await sequelize.query(`
    SELECT
      "Contacts".id as id,
      "ContactsKinds".icon as icon,
      "People".name as name,
      "Contacts".value as value
    FROM "Contacts"
    JOIN "People" ON "Contacts".person_id = "People".id
    JOIN "ContactsKinds" ON "Contacts".kind = "ContactsKinds".kind
  `);

  // console.log(contacts);

  for (const contact of contacts) {
    console.log(`${contact.icon} ${contact.name} ${contact.value}`);
  }

  // закрываем соединение
  await sequelize.close();
}

main();
