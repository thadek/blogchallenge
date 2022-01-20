const PostRepository = require('../repositories/PostRepository');
const rp = new PostRepository();
const CategoryRepo = require('../repositories/CategoryRepository')
const catrp = new CategoryRepo();
const { responseHandler } = require('../utils/utils')
const validator = require('validator')

const getPagination = (page) => {
    const limit = 5
    const offset = page ? page * limit : 0;
    return { limit, offset };
}

const createPost = async (post) => {
    //Validations in model.
    const res = await rp.create(post)
    if (res.error) return responseHandler(400, res.error)
    else return responseHandler(201, res)
}

const getPosts = async (page) => {
    if (page) if (!validator.isInt(page)) return responseHandler(400, "Invalid page, only numbers.")
    return rp.findWithPagination(getPagination(page)).then(repoResponse => {
        if (repoResponse.count > 0) return responseHandler(200, repoResponse.rows)
        else return responseHandler(404, "No posts")
    }).catch(err => { return responseHandler(500, err) })

}


const getPostById = async (id) => {
    if (!validator.isInt(id)) return responseHandler(400, "Invalid id, only numbers.")
    else return rp.findById(id).then(repoResponse => {
        if (repoResponse) return responseHandler(200, repoResponse)
        else return responseHandler(404, `The post with id ${id} doesn't exists.`)
    }).catch(err => { return responseHandler(500, err) })

}

const updatePost = async (id,post) => {
    if (!validator.isInt(id)) return responseHandler(400, "Invalid id, only numbers.")
    post.id = +id;
    const postFetched = await rp.findById(post.id)
    if(!postFetched) return responseHandler(404,`Post with id ${post.id} doesn't exists.`)
    if(post.createdAt) return responseHandler(400,"createdAt is readonly field, can't update.")
    return postFetched.update(post).then(repoResponse=>{
        if(repoResponse) return responseHandler(200,{updated:repoResponse})
        //else return responseHandler(200,{response:`No changes in post with id ${id}.`})
    })

}

const deletePostById = async (id) => {
    if (!validator.isInt(id)) return responseHandler(400, "Invalid id, only numbers.")
    else return rp.deleteById(id).then(repoResponse => {
        if (repoResponse == 0) return responseHandler(404, `Can't find post with id ${id}.`)
        return responseHandler(200, {response:`Post with id ${id} deleted.`})
    }).catch(err => { return responseHandler(500, err) })

}

const PostService = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePostById

}

module.exports = PostService;