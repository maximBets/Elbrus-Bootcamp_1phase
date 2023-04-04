const { sequelize } = require('./models');

async function main() {
  await sequelize.query(`
    CREATE TABLE IF NOT EXISTS "People" (
      id serial PRIMARY KEY,
      name text UNIQUE NOT NULL
    );
  `);

  await sequelize.query(`
    CREATE TABLE IF NOT EXISTS "ContactsKinds" (
      kind text PRIMARY KEY,
      icon text NOT NULL
    );
  `);

  await sequelize.query(`
    CREATE TABLE IF NOT EXISTS "Contacts" (
      id serial PRIMARY KEY,
      person_id integer REFERENCES "People" ON DELETE CASCADE,
      value text NOT NULL,
      kind text REFERENCES "ContactsKinds" NOT NULL
    );
  `);

  // закрываем соединение
  await sequelize.close();
}

main();
