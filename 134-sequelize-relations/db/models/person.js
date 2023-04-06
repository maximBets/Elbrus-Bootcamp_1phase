const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Contact }) {
      // связь один ко многим со стороны таблицы, у которой нет внешнего ключа (один)
      this.hasMany(Contact, { foreignKey: 'person_id' });
    }
  }
  Person.init(
    {
      name: {
        type: DataTypes.TEXT,
        // не должно быть пустым
        allowNull: false,
        // должно быть уникальным
        unique: true,
      },
      address: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Person',
    }
  );
  return Person;
};
