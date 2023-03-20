'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class marteshka extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  marteshka.init({
    leg: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'marteshka',
  });
  return marteshka;
};