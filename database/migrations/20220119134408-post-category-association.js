'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Posts',{
      fields:['CategoryId'],
      type:'foreign key',
      name:'post_category_association',
      references:{
        table:'Categories',
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Posts',{
      fields:['CategoryId'],
      type:'foreign key',
      name:'post_category_association',
      references:{
        table:'Categories',
        field:'id'
      }
    })
  }
};
