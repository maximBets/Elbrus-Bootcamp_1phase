const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
