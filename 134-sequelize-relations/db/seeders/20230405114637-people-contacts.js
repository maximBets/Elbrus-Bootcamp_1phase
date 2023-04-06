// импортируем модели ИЗ ПАПКИ models
const { Person, Contact } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    const people = await Person.bulkCreate(
      [
        {
          name: 'Вася',
          // Чтобы добавить человека с его контактами указываем контакты в виде
          // массива с ключом Contacts (название таблицы)
          Contacts: [
            { value: '+7345934234', kind: 'phone' },
            { value: '88003342343', kind: 'phone' },
            { value: 'vasya@gmail.com', kind: 'email' },
          ],
        },
        {
          name: 'Петя',
          Contacts: [{ value: 'https://petya.org', kind: 'website' }],
        },
        {
          name: 'Гриша',
          Contacts: [{ value: '+734234234234', kind: 'phone' }],
        },
      ],
      {
        // чтобы создать человека вместе с контактами прописываем эту опцию
        // в массив кладём ту модель, связь с которой мы хотим использовать
        include: [Contact],
      }
    );
  },

  async down() {
    // удаляем все данные из таблицы People
    // { cascade: true } - позволяет удалить и все связанные данные
    await Person.destroy({ truncate: { cascade: true } });
  },
};
