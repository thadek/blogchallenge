const Repository = require('./Repository');
const { Post, Category } = require('../../database/models');
const { Op } = require('sequelize')

class CategoryRepository extends Repository {

    constructor() {
        super();
        this.model = Category;
    }

}

module.exports = CategoryRepository;