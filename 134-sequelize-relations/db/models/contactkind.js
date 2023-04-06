const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ContactKind extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Contact }) {
      this.hasMany(Contact, { foreignKey: 'kind' });
    }
  }
  ContactKind.init(
    {
      kind: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.TEXT,
      },
      icon: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'ContactKind',
    }
  );
  return ContactKind;
};
