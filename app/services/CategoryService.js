const CategoryRepo = require('../repositories/CategoryRepository')
const rp = new CategoryRepo();
const { responseHandler } = require('../utils/utils')
const validator = require('validator')

const createCategory = async (category) =>{
 return rp.create(category).then(repoResponse=>{
     if(repoResponse.error) return responseHandler(400,repoResponse.error)
     return responseHandler(201,repoResponse)})
 .catch(error=>responseHandler(500,error))
}

const updateCategory = async (id,category) =>{
    if (!validator.isInt(id)) return responseHandler(400, "Invalid id, only numbers.")
    category.id = +id;
    if(!category.name) return responseHandler(400, "Name field is required.")
    const catFetched = await rp.findById(id)
    if(!catFetched) return responseHandler(404,`Category with id ${id} doesn't exists.`)
    return catFetched.update(category).then(repoResponse=>responseHandler(200,repoResponse))
    .catch(error=>responseHandler(500,error))
}

const getCategories = async () =>{
  return rp.getAll().then(repoResponse=>responseHandler(200,repoResponse)).catch(err=>responseHandler(500,err))
}

const getCategoryById = async (id) => {
    if (!validator.isInt(id)) return responseHandler(400, "Invalid id, only numbers.")
    else return rp.findById(id).then(repoResponse => {
        if (repoResponse) return responseHandler(200, repoResponse)
        else return responseHandler(404, `The category with id ${id} doesn't exists.`)
    }).catch(err => { return responseHandler(500, err) })

}

const deleteCategory = async (id) =>{
    if (!validator.isInt(id)) return responseHandler(400, "Invalid id, only numbers.")
    return rp.deleteById(id).then(repoResponse => {
        if (repoResponse == 0) return responseHandler(404, `Can't find category with id ${id}.`)
        return responseHandler(200, {response:`Category with id ${id} deleted.`})
    }).catch(err => { return responseHandler(500, err) })

}

const CategoryService = {
    createCategory,
    updateCategory,
    getCategoryById,
    getCategories,
    deleteCategory
}

module.exports = CategoryService;