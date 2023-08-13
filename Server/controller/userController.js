import UserModel from "../model/userModel.js";

export const getAllUsers = async (req, resp) => {
  try {
    const users = await UserModel.find();
    if (!users) {
      resp
        .status(401)
        .json({ success: false, message: "User is not available" });
    } else {
      resp.status(200).json({ success: true, users });
    }
  } catch (error) {
    resp.status(500).json({ success: false, message: error.message });
  }
};

export const register = async (req, resp) => {
  const { name, email, mobile, age, work, add, desc } = req.body;
  try {
    if (!name || !email || !mobile || !age || !work || !add || !desc) {
      resp
        .status(401)
        .json({ success: false, message: "Please feel all the field" });
    }

    const user = await UserModel.findOne({ email: email });
    if (user) {
      resp.status(401).json({ success: false, message: "User already exist" });
    } else {
      const newUser = new UserModel(req.body);
      await newUser.save();
      resp.status(200).json({ success: true, list: newUser._id });
    }
  } catch (error) {
    resp.status(500).json({ success: false, message: error.message });
  }
};

export const getUser = async (req, resp) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);
    if (!user) {
      resp.status(401).json({ success: false, message: "User Not found" });
    } else {
      resp.status(200).json({ success: true, user });
    }
  } catch (error) {
    resp.status(500).json({ success: false, message: error.message });
  }
};

export const updateUser = async (req, resp) => {
  const { id } = req.params;
  const updatedUser = req.body;
  try {
    const result = await UserModel.updateOne(
      { _id: id }, // Match the item by ID
      { $set: updatedUser } // Update fields with new values
    );
    if (result.modifiedCount > 0) {
      resp
        .status(200)
        .json({ success: true, message: "Item updated successfully" });
    } else {
      resp.status(401).json({ success: true, message: "Item not found" });
    }
  } catch (error) {
    resp.status(500).json({ success: false, message: error.message });
  }
};

export const deleteUser = async (req, resp) => {
  const { id } = req.params;

  try {
    const result = await UserModel.deleteOne({ _id: id });

    if (result.deletedCount > 0) {
      resp
        .status(200)
        .json({ success: true, message: "Item deleted successfully" });
    } else {
      resp.status(404).json({ success: false, message: "Item not found" });
    }
  } catch (error) {
    resp.status(500).json({ success: false, message: error.message });
  }
};
