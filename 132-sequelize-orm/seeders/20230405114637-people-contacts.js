// импортируем модели ИЗ ПАПКИ models
const { Person, Contact } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    // await createPerson('Вася');
    // await createPerson('Петя');
    // await createPerson('Гриша');
    // await createPerson("Д'Артаньян");
    // await createContact({ person_id: 1, value: '+7345934234', kind: 'phone' });
    // await createContact({ person_id: 1, value: '88003342343', kind: 'phone' });
    // await createContact({ person_id: 1, value: 'vasya@gmail.com', kind: 'email' });
    // await createContact({ person_id: 2, value: 'https://petya.org', kind: 'website' });
    // await createContact({ person_id: 3, value: '+734234234234', kind: 'phone' });

    // можно создавать записи по отдельности
    const vasya = await Person.create({ name: 'Вася' });
    const petya = await Person.create({ name: 'Петя' });
    const grisha = await Person.create({ name: 'Гриша' });
    const dartanian = await Person.create({ name: "Д'Артаньян" });

    // можно создавать записи сразу пачкой
    // contacts - массив созданных контактов
    const contacts = await Contact.bulkCreate([
      { person_id: vasya.id, value: '+7345934234', kind: 'phone' },
      { person_id: vasya.id, value: '88003342343', kind: 'phone' },
      { person_id: vasya.id, value: 'vasya@gmail.com', kind: 'email' },
      { person_id: petya.id, value: 'https://petya.org', kind: 'website' },
      { person_id: grisha.id, value: '+734234234234', kind: 'phone' },
    ]);
  },

  async down() {
    // удаляем все данные из таблицы People
    // { cascade: true } - позволяет удалить и все связанные данные
    await Person.destroy({ truncate: { cascade: true } });
  },
};
