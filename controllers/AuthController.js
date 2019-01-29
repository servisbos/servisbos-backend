const { user } = require("../models");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt(12);

    // req.body.password = await bcrypt.hash(req.body.password, salt);

    console.log(req.body);
    await user.create(req.body);

    res.status(200).json({ message: "Success." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "There is an error.", err });
  }
};

exports.signIn = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user === null) {
      return res.status(403).json({ message: "User not found." });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(403).json({ message: "Password not valid." });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "You're logged in",
      id: user.id,
      token
    });
  } catch (err) {
    res.status(500).json({ message: "There is an error.", err });
  }
};

exports.verifyToken = (req, res) => {
  res.status(200).json({ user: req.user });
};
