/* eslint-disable camelcase */
const { sequelize } = require('./models');

function deletePerson(id) {
  return sequelize.query('DELETE FROM "People" WHERE id = ?', {
    replacements: [id],
  });
}

async function main() {
  await deletePerson(1);

  // закрываем соединение
  await sequelize.close();
}

main();
