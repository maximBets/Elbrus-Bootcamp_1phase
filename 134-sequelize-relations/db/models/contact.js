const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Person, ContactKind }) {
      // связь один ко многим со стороны таблицы, у которой внешний ключ (много)
      // this === Contact
      this.belongsTo(Person, { foreignKey: 'person_id' });
      this.belongsTo(ContactKind, { foreignKey: 'kind' });
    }
  }
  Contact.init(
    {
      person_id: {
        type: DataTypes.INTEGER,
        // внешний ключ ссылается на таблицу People
        references: {
          model: 'People', // здесь пишем название таблицы во множественном числе
          key: 'id',
        },
        onDelete: 'CASCADE', // каскадно удалять контакты при удалении людей
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      kind: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
          model: 'ContactKinds',
          key: 'kind',
        },
      },
    },
    {
      sequelize,
      modelName: 'Contact',
    }
  );
  return Contact;
};
