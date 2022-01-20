const service = require('../services/PostService')
module.exports = {

    createPost: (req, res) => {
        service.createPost(req.body).then(({ status, response }) => { res.status(status).json(response) }).catch(err => { res.status(500).json(err) })
    },

    getPosts: (req, res) => {
        service.getPosts(req.query.page).then(({ status, response }) => { res.status(status).json(response) }).catch(err => { res.status(500).json(err) })
    },

    getPostById: (req, res) => {
        service.getPostById(req.params.id).then(({ status, response }) => { res.status(status).json(response) }).catch(err => { res.status(500).json(err) })
    },

    updatePost: (req, res) => {
       service.updatePost(req.params.id,req.body).then(({ status, response }) => { res.status(status).json(response) }).catch(err => { res.status(500).json(err) })
    },

    deletePost: (req, res) => {
        service.deletePostById(req.params.id).then(({ status, response }) => { res.status(status).json(response) }).catch(err => { res.status(500).json(err) })
    }

}