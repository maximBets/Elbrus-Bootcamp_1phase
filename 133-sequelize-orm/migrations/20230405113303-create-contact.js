/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      person_id: {
        type: Sequelize.INTEGER,
        // внешний ключ ссылается на таблицу People
        references: {
          model: 'People', // здесь пишем название таблицы во множественном числе
          key: 'id',
        },
        onDelete: 'CASCADE', // каскадно удалять контакты при удалении людей
      },
      value: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      kind: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contacts');
  },
};
