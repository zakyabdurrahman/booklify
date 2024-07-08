'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BookList.belongsTo(models.User);
      BookList.belongsTo(models.Book);
    }
  }
  BookList.init({
    index: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BookList'
  });
  return BookList;
};