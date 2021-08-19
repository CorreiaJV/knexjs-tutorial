const PersonDAO = require('../dao/person')

class PersonService {
    createPerson(personDTO) {
        const { firstName, lastName, email } = personDTO;
        return PersonDAO.createPerson(firstName, lastName, email);
    }
    getAll() {
        return PersonDAO.getAll();
    }
    getById(id) {
        return PersonDAO.getById(id);
    }
    updatePersonById(id, personDTO) {
        const { firstName, lastName, email } = personDTO;
        return PersonDAO.updatePersonById(id, firstName, lastName, email);
    }
    deleteByID(id) {
        return PersonDAO.deletePersonById(id);
    }

}

module.exports = new PersonService();
