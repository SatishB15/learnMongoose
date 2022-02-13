const express = require('express');
const insertRouter = express.Router();
const insertController = require('../controllers/user.insertController');
insertRouter.post('/addOneUser', insertController.insertOneUser);
insertRouter.post('/addManyUsers', insertController.insertManyUsers);
module.exports = insertRouter;
