const users_service_type = require("../models").users_service_type;
const User = require("../models").user;
const ServiceType = require("../models").services_type;

exports.getUserServiceType = async (req, res) => {
  const userservicetype = await users_service_type.findAll({
    include: [User, ServiceType]
  });

  res.json({ userservicetype });
};

exports.createUserServiceType = async (req, res) => {
  users_service_type.create(req.body).then(users_service_type => {
    res.send("Success Yeah!!");
  });
};

exports.getUserServiceTypeById = async (req, res) => {
  const userservicetype = await users_service_type.findById(req.params.id);

  res.json({ userservicetype });
};
exports.getUserServiceTypeByIdServiceType = async (req, res) => {
  const userservicetype = await users_service_type.findAll({
    where: { id_services_type: req.params.idServiceType },
    include: [User, ServiceType]
  });

  res.json({ userservicetype });
};

exports.getUserServiceTypeBySpecialization = async (req, res) => {
  if(req.query){
    let condition = {};

    Object.keys(req.query).forEach(key=>
      Object.assign(condition,{
        [key]:{$like: `%${req.query[key]}%` }
      })
   );
    users_service_type.findAll({where:{...condition }})
      .then(datas => res.status(200).json({ datas }))
      .catch(err => res.status(500).json(err));
  }else{
    users_service_type.findAll()
      .then(datas => res.status(200).json({ datas }))
      .catch(err => res.status(500).json(err));
  }
}


exports.updateUserServiceTypeById = async (req, res) => {
  const [isUpdated] = await users_service_type.update(req.body, {
    where: { id: req.params.id },

  });

  if (Boolean(isUpdated)) {
    const userservicetype = await users_service_type.findById(req.params.id);

    res.json({ userservicetype });
  } else {
    res.json({});
  }
};

exports.deleteUserServiceTypeById = async (req, res) => {
  await UserServiceType.destroy({ where: { id: req.params.id } });

  res.json({});
};
