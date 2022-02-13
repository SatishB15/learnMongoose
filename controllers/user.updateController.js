const UserModel = require('../models/user.model');

class updateController {
  static updateOneUser = async (req, res) => {
    const user = await UserModel.findOne({ first_name: req.params.first_name });
    if (!user) return res.status(404).json({ message: 'User Not Found' });
    try {
      const updatedUser = await UserModel.updateOne(
        { first_name: req.params.RollNo },
        { $set: req.body }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  static updateManyUsers = async (req, res) => {
    const users = await UserModel.find();
    try {
      const updatedUser = await UserModel.updateMany({
        $set: { gender: req.params.gender },
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  static findByIdAndUpdateUser = async (req, res) => {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  static findOneAndUpdate = async (req, res) => {
    try {
      const updatedUser = await UserModel.findOneAndUpdate(
        req.params.first_name,
        {
          $set: req.body,
        }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}
module.exports = updateController;
