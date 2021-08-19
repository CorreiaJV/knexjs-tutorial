const db = require('../db/db');


class PersonDAO {
    async createPerson(firstname, lastname, email) {
        const [id] = await db('person').insert({
            email,
            first_name: firstname,
            last_name: lastname,
        }).returning('id');
        return id;
    }
    async getAll() {
        const response = await db('person').select('*')
        return response;
    }
    async getById(id) {
        const response = await db('person').where('id', id)
        return response;
    }
    async updatePersonById(id, firstname, lastname, email) {
        const response = await db('person').where('id', id).update({
            email: email,
            first_name: firstname,
            last_name: lastname
        })

        return response
    }
    async deletePersonById(id) {
        const response = await db('person').where('id', id).del()
        console.log(response)
    }
}
module.exports = new PersonDAO();
