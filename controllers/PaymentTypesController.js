const payment_type = require("../models").payment_type;

exports.getPaymentType = async (req, res) => {
    const paymenttype = await payment_type.findAll();

    res.json({ paymenttype });
};

exports.createPaymentType = async (req, res) => {
    //   const SALT_WORK_FACTOR = 12;
    //   const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);

    //   req.body.password = await bcrypt.hash(req.body.password, salt);

    payment_type.create(req.body).then(payment_type => {
        res.send("Success Yeah!!");
    });
};

exports.getPaymentTypeById = async (req, res) => {
    const paymenttype = await payment_type.findById(req.params.id);

    res.json({ paymenttype });
};

exports.updatePaymentTypeById = async (req, res) => {
    const [isUpdated] = await payment_type.update(req.body, {
        where: { id: req.params.id }
    });

    if (Boolean(isUpdated)) {
        const paymenttype = await payment_type.findById(req.params.id);

        res.json({ paymenttype });
    } else {
        res.json({});
    }
};

exports.deletePaymentTypeById = async (req, res) => {
    await PaymentType.destroy({ where: { id: req.params.id } });

    res.json({});
};