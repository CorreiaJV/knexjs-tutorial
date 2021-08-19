const personService = require('../service/person');

class PersonController {
    async createPerson(req, res) {
        try {
            const id = await personService.createPerson(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err)
        }
    }
    async getAll(req, res) {
        try {
            const response = await personService.getAll();
            if (response.length == 0) {
                res.status(400).send({ error: "Nenhum usuário existente" })
            }
            res.status(200).json(response)

        } catch (err) {
            console.error(err)
        }
    }
    async getById(req, res) {
        const { id } = req.params;
        try {
            const response = await personService.getById(id)
            if (response.length == 0) {
                res.status(400).send({ error: "Nenhum usuário cadastrado com esse ID" })
            }
            res.status(200).json(response)
        } catch (err) {
            console.error(err)
        }
    }
    async updatePersonByID(req, res) {
        const { id } = req.params;
        try {
            await personService.updatePersonById(id, req.body)
            res.status(200).send({ message: "Usuário com o id [" + id + "] atualizado com sucesso" })
        } catch (err) {
            console.log(err)
        }
    }

    async deletePersonByID(req, res) {
        const { id } = req.params;
        try {
            await personService.deleteByID(id)
            res.status(200).send({ message: "Usuário com o id [" + id + "] deletado com sucesso" })
        } catch (err) {
            console.log(err)
        }
    }
}
module.exports = new PersonController();
