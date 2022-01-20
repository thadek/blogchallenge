module.exports = {

    sequelizeErrorParser: (error) =>{     
        if(error.message === "Validation error" || error.name ==='SequelizeValidationError') return error.errors[0].message
        else return error.message  
    },

    responseHandler: (status,response) => {
        if(status>=400 && status <=599) return { status:status, response:{ error:response}};
        return { status:status, response:response}
    }

}