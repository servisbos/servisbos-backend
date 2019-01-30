const order_detail = require("../models").order_detail;

exports.getOrderDetail = async (req, res) => {
  const orderdetail = await order_detail.findAll();

  res.json({ orderdetail });
};

exports.createOrderDetail = async (req, res) => {
  order_detail.create(req.body).then(order_detail => {
    res.send("Success Yeah!!");
  });
};

exports.getOrderDetailById = async (req, res) => {
  const orderdetail = await order_detail.findById(req.params.id);

  res.json({ orderdetail });
};

exports.updateOrderDetailById = async (req, res) => {
  const [isUpdated] = await order_detail.update(req.body, {
    where: { id: req.params.id }
  });

  if (Boolean(isUpdated)) {
    const orderdetail = await order_detail.findById(req.params.id);

    res.json({ orderdetail });
  } else {
    res.json({});
  }
};

exports.deleteOrderDetailById = async (req, res) => {
  await OrderDetail.destroy({ where: { id: req.params.id } });

  res.json({});
};
