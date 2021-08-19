const express = require('express');
const personController = require('../controller/personController');


const router = express.Router();
router.post('/person', personController.createPerson);
router.get('/get', personController.getAll)
router.get('/get/:id', personController.getById)
router.put('/update/:id', personController.updatePersonByID)
router.delete('/delete/:id', personController.deletePersonByID)
module.exports = router;
