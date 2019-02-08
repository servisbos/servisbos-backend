const { user } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(12);

    req.body.password = await bcrypt.hash(req.body.password, salt);

    await user.create(req.body);

    res.status(200).json({ message: "Success." });
  } catch (err) {
    res.status(500).json({ message: "There is an error.", err });
  }
};

exports.signIn = async (req, res) => {
  try {
    const User = await user.findOne({ where: { username: req.body.username } });
    if (User === null) {
      return res.status(403).json({ message: "User not found." });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      User.password
    );
    console.log(validPassword);
    if (!validPassword) {
      return res.status(403).json({ message: "Password not valid." });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
console.log(User.id)
    res.status(200).json({
      message: "You're logged in",
      id: User.id,
      dataUser: User,
      token
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "There is an error.", err });
  }
};

exports.verifyToken = (req, res) => {
  res.status(200).json({ user: req.username });
};
