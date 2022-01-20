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
        },
        is:{
          args: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/ ,
          msg:'invalid imageURL.'
        } 
      }
    },
  }, {
    sequelize,
    updatedAt: false,
    modelName: 'Post',
  });

  Post.beforeCreate(async (post, options)=>{
    post.createdAt = new Date();
    if(!post.CategoryId) throw new Error('CategoryId is required.')
  })

  Post.beforeUpdate(async (post, options)=>{
    if(!post.CategoryId) throw new Error('CategoryId is required.')
    const postFetched = await Post.findByPk(post.id)
    if(!postFetched) throw new Error(`Post with id ${post.id} doesn't exists.`)
  })


  return Post;
};