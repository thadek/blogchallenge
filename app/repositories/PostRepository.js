const Repository = require('./Repository');
const { Post, Category } = require('../../database/models');
const { Op } = require('sequelize')

class PostRepository extends Repository {

    constructor() {
        super();
        this.model = Post;
    }

    findWithPagination({limit,offset}){
        const attributes = ['id','title','imageURL','createdAt']
        return this.model.findAndCountAll({attributes,limit,offset})
    }

}

module.exports = PostRepository;