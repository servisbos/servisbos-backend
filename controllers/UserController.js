const User = require("../models").user;
const UserServiceType = require("../models").users_service_type;
const ServiceType = require("../models").services_type;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getUsers = async (req, res) => {
  const users = await User.findAll();

  res.json({ users });
};

exports.getDataProvider = async (req, res) => {
  const users = await User.findAll({
    where: { id: req.params.id_provider},
    include: [{
      model: UserServiceType, 
      include: [
        ServiceType
      ]  
    }]
  });


  res.json({ users });
};

exports.createUser = async (req, res) => {
  const SALT_WORK_FACTOR = 12;
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);

  req.body.password = await bcrypt.hash(req.body.password, salt);

  User.create(req.body).then(user => {
    res.send("Success Yeah!!");
  });
};

exports.getUserById = async (req, res) => {
  const user = await User.findAll({
    where: { id: req.params.id },
    include: [UserServiceType]
  });

  res.json({ user });
};

exports.updateUserById = async (req, res) => {
  const [isUpdated] = await User.update(req.body, {
    where: { id: req.params.id }
  });

  if (Boolean(isUpdated)) {
    const user = await User.findById(req.params.id);

    res.json({ user });
  } else {
    res.json({});
  }
};

exports.filterUserByServicesType = async (req, res) => {
  const [isFilter] = await User.find(req.body, {
    where: { services_type: req.query.services_type }
  });
  return isFilter;
};

exports.deleteUserById = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });

  res.json({});
};

exports.login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });

  // check user account
  if (user === null) {
    return res.send("User not found");
  }

  // password validation
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  // check password
  if (!validPassword) {
    return res.send("Password Not Valid !!!");
  }

  // Generate Token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );

  res.json({
    message: "You are logged in",
    id: user.id,
    token
  });
};
