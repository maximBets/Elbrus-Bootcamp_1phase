/* eslint-disable camelcase */
const { Person, sequelize } = require('./models');

async function main() {
  // можем удалять сразу несколько записей через статический метод
  await Person.destroy({
    where: {
      id: [13, 14],
    },
  });

  // либо можем сначала найти, а потом удалить
  const petya = await Person.findOne({
    where: {
      name: 'Петя',
    },
  });
  console.log(petya.id, petya.name);
  await petya.destroy();

  await sequelize.close();
}

main();
