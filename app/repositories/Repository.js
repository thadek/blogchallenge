const { sequelizeErrorParser } = require('../utils/utils')
class Repository {

    async getAll() {
        return this.model.findAll();
    }

    async create(object) {
        try {
            const resp = await this.model.create(object);
            return resp
        } catch (err) {           
            return { error: sequelizeErrorParser(err) }
        }
    }

    async update(object) {
        try {
            const resp = await this.model.update(object,{where:{id:object.id}});
            return resp
        } catch (err) {
            return { error: sequelizeErrorParser(err) }
        }
    }

    async findById(id) {
        return this.model.findByPk(id);
    }

    async deleteById(id) {
        try {
            const resp = await this.model.destroy({ where: { id: id } })
            return resp
        } catch (err) {
            return { error: sequelizeErrorParser(err) }
        }
    }

}

module.exports = Repository;
