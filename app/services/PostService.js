const PostRepository = require('../repositories/PostRepository');
const rp = new PostRepository();
const { sequelizeErrorParser, responseHandler } = require('../utils/utils')

const getPagination = (page) => {
    const limit = 5
    const offset = page ? page * limit : 0;
    return { limit, offset };
  }

const getPosts = (page) =>{
try{
 return rp.findWithPagination(getPagination(page)).then(repoResponse=>{
        if(repoResponse.count>0) return responseHandler(200,repoResponse.rows)
        else return responseHandler(404,"No posts")
    })

}catch(err){
    return responseHandler(500,err)
}


}

const PostService = {
      getPosts
}

module.exports = PostService;