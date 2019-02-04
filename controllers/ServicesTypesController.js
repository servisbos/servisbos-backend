const services_type = require("../models").services_type;

exports.getServicesType = async (req, res) => {
  const servicetype = await services_type.findAll().catch(err => res.send(err));

  res.json({ servicetype });
};

exports.createServiceType = async (req, res) => {
  //   const SALT_WORK_FACTOR = 12;
  //   const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);

  //   req.body.password = await bcrypt.hash(req.body.password, salt);

  services_type.create(req.body).then(services_type => {
    res.send("Success Yeah!!");
  });
};

exports.getServiceTypeById = async (req, res) => {
  const servicetype = await services_type.findById(req.params.id);

  res.json({ servicetype });
};

exports.updateServiceTypeById = async (req, res) => {
  const [isUpdated] = await services_type.update(req.body, {
    where: { id: req.params.id }
  });

  if (Boolean(isUpdated)) {
    const servicetype = await services_type.findById(req.params.id);

    res.json({ servicetype });
  } else {
    res.json({});
  }
};

exports.deleteServiceTypeById = async (req, res) => {
  await ServiceType.destroy({ where: { id: req.params.id } });

  res.json({});
};
