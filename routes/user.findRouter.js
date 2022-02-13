const express = require('express');
const findRouter = express.Router();
const findController = require('../controllers/user.findController');

findRouter.get('/', (req, res) => {
  res.status(200).json({
    insertOneUser: '/addOneUser',
    insertManyUser: '/addManyUsers',
    getAllUser: '/showUsers',
    getSingleUser: '/:first_name',
    getUserFindById: '/id/:id',
    deleteAllUser: '/delete',
    deleteSingleUser: '/:first_name',
    findByIdAndDeleteUser: '/id/:id',
    findOneAndRemoveUser: '/find/:first_name',
    findByIdAndRemoveUser: '/find/id/:id',
    updateOneUser: '/:first_name',
    updateManyUsers: '/update/:gender',
    findByIdAndUpdateUser: '/update/id/:id',
    findOneAndUpdate: '/update/user/:first_name',
  });
});
findRouter.get('/showUsers', findController.getAllUserDetails);
findRouter.get('/:first_name', findController.getSingleUser);
findRouter.get('/id/:id', findController.getUserFindById);
module.exports = findRouter;
