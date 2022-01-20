const router = require('express').Router();

//Controllers
const PostController = require('../controllers/PostController');
const CategoryController = require('../controllers/CategoryController');

//Home
router.get('/',(req,res)=>{
    res.json({msg:'Blog App working :) - Gabi - Alkemy warm up'})
})

//Posts Routes
//Get
router.get('/posts',PostController.getPosts)
router.get('/posts/:id',PostController.getPostById)
//Post
router.post('/posts',PostController.createPost)
//Patch
router.patch('/posts/:id',PostController.updatePost)
//Delete
router.delete('/posts/:id',PostController.deletePost)


//Categories Routes
//Get
router.get('/categories',CategoryController.getCategories)
router.get('/categories/:id',CategoryController.getCategory)
//Post
router.post('/categories',CategoryController.createCategory)
//Patch
router.patch('/categories/:id',CategoryController.updateCategory)
//Delete
router.delete('/categories/:id',CategoryController.deleteCategory)


module.exports = router;