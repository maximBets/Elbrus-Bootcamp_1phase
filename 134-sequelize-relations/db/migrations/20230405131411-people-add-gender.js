/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('People', 'gender', {
      type: Sequelize.TEXT,
      defaultValue: 'male',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('People', 'gender');
  },
};
