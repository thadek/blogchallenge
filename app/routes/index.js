const router = require('express').Router();

//Controllers
const PostController = require('../controllers/PostController');
const CategoryController = require('../controllers/CategoryController');

//Home
router.get('/',(req,res)=>{
    res.json({msg:'Blog App working :) - Gabi - Alkemy warm up'})
})

//Post Routes 
router.get('/posts',PostController.getPosts)

//router.post('/posts',)

module.exports = router;