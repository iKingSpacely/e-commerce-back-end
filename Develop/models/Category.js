const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//creating the class Category that extends from the Model
class Category extends Model {}
Category.init(
  //definine column contents
  {
    id: {
      //ensures data type is an integer
      type: DataTypes.INTEGER,
      //does not allow null option
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      //ensures data type is a string
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;