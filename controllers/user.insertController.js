const UserModel = require('../models/user.model');

class insertController {
  static insertOneUser = async (req, res) => {
    try {
      const addedUser = new UserModel(req.body);
      res.status(200).json(addedUser);
      addedUser.save();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  static insertManyUsers = async (req, res) => {
    try {
      const addedUsers = UserModel.insertMany(req.body);
      res.status(200).json(JSON.stringify(addedUsers));
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
module.exports = insertController;
