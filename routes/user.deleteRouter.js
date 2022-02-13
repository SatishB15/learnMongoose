const express = require('express');
const deleteRouter = express.Router();
const deleteController = require('../controllers/user.deleteController');

deleteRouter.delete('/delete', deleteController.deleteAllUsers);
deleteRouter.delete('/:first_name', deleteController.deleteAllUsers);
deleteRouter.delete('/id/:id', deleteController.findByIdAndDeleteUser);
deleteRouter.delete('/find/:first_name', deleteController.findOneAndRemoveUser);
deleteRouter.delete('/find/id/:id', deleteController.findByIdAndRemoveUser);
module.exports = deleteRouter;
