const UserModel = require('../models/user.model');
class deleteController {
  static deleteAllUsers = async (req, res) => {
    try {
      const deletedUsers = await UserModel.deleteMany();
      res.status(200).json(deletedUsers);
    } catch (error) {
      res.status(404).send('All Users are Not Deleted');
    }
  };
  static deleteOneUser = async (req, res) => {
    try {
      const deletedUser = await UserModel.deleteOne({
        first_name: req.params.first_name,
      });
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(404).send('User Not Deleted');
    }
  };
  static findByIdAndDeleteUser = async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).send('Id Of Requested User Not Found');
    }
  };
  static findOneAndRemoveUser = async (req, res) => {
    try {
      const user = await UserModel.findOneAndRemove(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).send('User Not Found');
    }
  };
  static findByIdAndRemoveUser = async (req, res) => {
    try {
      const user = await UserModel.findByIdAndRemove(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).send('Id Of Requested User Not Found');
    }
  };
}
module.exports = deleteController;
