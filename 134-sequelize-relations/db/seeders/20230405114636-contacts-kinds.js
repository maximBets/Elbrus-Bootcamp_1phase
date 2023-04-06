const { ContactKind } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await ContactKind.bulkCreate([
      { kind: 'phone', icon: '📞' },
      { kind: 'email', icon: '📧' },
      { kind: 'website', icon: '🌎' },
    ]);
  },

  async down() {
    await ContactKind.destroy({ truncate: { cascade: true } });
  },
};
