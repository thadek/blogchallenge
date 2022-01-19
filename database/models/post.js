'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
  
    static associate(models) {
      Post.belongsTo(models.Category)
    }
  }
  Post.init({
    title: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:`Title can't be null.`
        }
      }
    },
    content: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:`Content can't be null.`
        }
      }
    },
    imageURL: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:`imageURL can't be null.`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};