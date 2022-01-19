'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      Category.hasMany(models.Post)
    }
  }
  Category.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:`Name can't be null.`
        }
      }}
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Category',
  });
  return Category;
};