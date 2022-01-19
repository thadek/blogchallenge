const Repository = require('./Repository');
const { Post, Category } = require('../../database/models');
const { Op } = require('sequelize')

class PostRepository extends Repository {

    constructor() {
        super();
        this.model = Post;
    }

  //findWithPagination

}

module.exports = PostRepository;