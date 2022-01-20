const service = require('../services/CategoryService')

module.exports = {
    
    createCategory: (req,res) =>{
        service.createCategory(req.body).then(({ status, response }) => { res.status(status).json(response) }).catch(err => { res.status(500).json(err) })
    },

    getCategories: (req,res) =>{
        service.getCategories().then(({ status, response }) => { res.status(status).json(response) }).catch(err => { res.status(500).json(err) })
    },

    getCategory: (req,res) =>{
        service.getCategoryById(req.params.id).then(({ status, response }) => { res.status(status).json(response) }).catch(err => { res.status(500).json(err) })
    },

    updateCategory: (req,res) =>{
        service.updateCategory(req.params.id,req.body).then(({ status, response }) => { res.status(status).json(response) }).catch(err => { res.status(500).json(err) })
    },

    deleteCategory: (req,res) => {
        service.deleteCategory(req.params.id).then(({ status, response }) => { res.status(status).json(response) }).catch(err => { res.status(500).json(err) })
    }
  
}