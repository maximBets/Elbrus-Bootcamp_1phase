/* eslint-disable camelcase */
const { Person, sequelize } = require('./models');

async function main() {
  // сразу меняем данные, которые нам необходимо
  await Person.update({ name: 'Григорий' }, { where: { name: 'Гриша' } });

  // сначала ищем запись, а потом меняем
  const grisha = await Person.findOne({ where: { name: 'Григорий' } });
  console.log(grisha.name);
  // меняем имя
  grisha.name = 'Гриша';
  // сохраняем изменения в БД
  await grisha.save();

  await sequelize.close();
}

main();
