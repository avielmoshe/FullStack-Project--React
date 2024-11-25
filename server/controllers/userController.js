import User from "../models/userModel.js";

export const createNewUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).send({ error: "email and username are required" });
    }
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const newUser = new User({
      username,
      email,
    });

    await newUser.save();
    res.status(201).send({
      status: "success",
      message: "User Successfully Registered",
      data: newUser,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const singInUser = async (req, res) => {
  const { username, email } = req.body;
  if (!email && !username) {
    return res.status(400).send({ error: "email/username is required" });
  }
  try {
    const foundUser = await User.findOne({
      $and: [{ username: req.body.username }, { email: req.body.email }],
    });
    if (!foundUser) {
      return res
        .status(404)
        .send({ message: "Email/username not found.", isAuth: false });
    }

    res.status(200).send({
      message: "Authentication successful",
      isAuth: true,
      user: foundUser,
    });
  } catch (error) {
    console.error("Sign-in error:", error);
    res
      .status(500)
      .send({ error: "Something went wrong. Please try again later." });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { username, email, newUsername, newEmail } = req.body;
    if (!username && !email) {
      return res.status(400).send({ error: "email and username are required" });
    }
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (!existingUser) {
      return res.status(400).json({ message: "Username or email not found" });
    }
    const id = existingUser._id;
    const updateData = {};
    if (newUsername) updateData.username = newUsername;
    if (newEmail) updateData.email = newEmail;

    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(201).send({
      message: "user updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.error("Error updating user", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username && !email) {
      return res.status(400).send({ error: "email and username are required" });
    }
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (!existingUser) {
      return res.status(400).json({ message: "Username or email not found" });
    }
    const id = existingUser._id;

    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).send({
      message: "user deleted successfully",
      deleteUser,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Server error" });
  }
};
