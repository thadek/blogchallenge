const service = require('../services/PostService')
module.exports = {

    createPost:(req,res) =>{
        
    },

    getPosts: (req,res) =>{
       service.getPosts(req.query.page).then(({status,response})=>{res.status(status).json(response)}).catch(err=>{res.status(500).json(err)})
    },

    getPostById: (req,res) =>{

    },

    updatePost: (req,res) =>{

    },

    deletePost: (req,res) => {

    }
  
}