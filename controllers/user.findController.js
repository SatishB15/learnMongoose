const UserModel = require('../models/user.model');

class findController {
  static getAllUserDetails = async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(404).send('Their is no users in Database');
    }
  };
  static getSingleUser = async (req, res) => {
    try {
      const user = await UserModel.findOne({
        first_name: req.params.first_name,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(404).send('Student Not Found');
    }
  };
  static getUserFindById = async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).send('Student Not Found');
    }
  };
}

module.exports = findController;
