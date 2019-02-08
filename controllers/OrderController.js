const order = require("../models").order;
const User = require("../models").user;

exports.getOrder = async (req, res) => {
    const orders = await order.findAll();

    res.json({ orders });
};

exports.createOrder = async (req, res) => {
try{
    order.create(req.body).then(order => {
    console.log(order);
    res.status(200).json({ message: "Success." });    });
}catch(err){
    res.status(500).json({ message: "There is an error.", err });

}
    
};

exports.getOrderById = async (req, res) => {
    const orders = await order.findById(req.params.id);

    res.json({ orders });
};
exports.getOrderByIdProvider = async (req, res) => {

    const orders = await order.findAll({
    where: { id_provider: req.params.id },
    include: [{
      model: User,
      as: "user",
      required: true 
        
    },{
      model: User,
      as:"provider",
     required: true  
    }]
  });

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