const order = require("../models").order;

exports.getOrder = async (req, res) => {
    const orders = await order.findAll();

    res.json({ orders });
};

exports.createOrder = async (req, res) => {

    order.create(req.body).then(order => {
        res.send("Success Yeah!!");
    });
};

exports.getOrderById = async (req, res) => {
    const orders = await order.findById(req.params.id);

    res.json({ orders });
};

exports.updateOrderById = async (req, res) => {
    const [isUpdated] = await order.update(req.body, {
        where: { id: req.params.id }
    });

    if (Boolean(isUpdated)) {
        const orders = await order.findById(req.params.id);

        res.json({ orders });
    } else {
        res.json({});
    }
};

exports.deleteOrderById = async (req, res) => {
    await Order.destroy({ where: { id: req.params.id } });

    res.json({});
};