'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Review);
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: {
        msg: "Username must be unique"
      },
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Username is required"
        },
        notNull: {
          msg: "Username is required"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password is required"
        },
        notNull: {
          msg: "Password is required"
        }
      }
    },
    profileUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Profile image is required"
        },
        notNull: {
          msg: "Profile image is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};