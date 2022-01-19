'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      Category.belongsToMany(models.Post,{through:'posts_categories'})
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
    modelName: 'Category',
  });
  return Category;
};