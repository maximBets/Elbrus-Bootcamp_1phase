/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
const { sequelize, Person, Contact } = require('./models');

async function main() {
  // const contacts = await Contact.findAll();

  // raw: true - получить данные в виде обычных объектов
  // const contacts = await Contact.findAll({ raw: true });

  // // можем сортировать
  // const contacts = await Contact.findAll({
  //   order: [
  //     // сортируем по колонке kind, ASC - по возрастанию, DESC - по убыванию
  //     ['kind', 'ASC'],
  //   ],
  //   raw: true,
  // });

  // достать только телефоны
  // const contacts = await Contact.findAll({
  //   where: { kind: 'phone' },
  //   raw: true,
  // });

  // достать только Васины телефоны
  const vasya = await Person.findOne({ where: { name: 'Вася' } });
  const contacts = await Contact.findAll({
    where: {
      kind: 'phone',
      person_id: vasya.id,
    },
    raw: true,
  });

  console.log(contacts);

  // закрываем соединение
  await sequelize.close();
}

main();
