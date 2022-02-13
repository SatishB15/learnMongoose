const express = require('express');
const updateRouter = express.Router();
const updateController = require('../controllers/user.updateController');

updateRouter.patch('/:first_name', updateController.updateOneUser);
updateRouter.patch('/update/:gender', updateController.updateManyUsers);
updateRouter.patch('/update/id/:id', updateController.findByIdAndUpdateUser);
updateRouter.patch(
  '/update/user/:first_name',
  updateController.findOneAndUpdate
);
module.exports = updateRouter;
