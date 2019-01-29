const review_services = require("../models").review_services;

exports.getReviewServices = async (req, res) => {
    const reviewservices = await review_services.findAll();

    res.json({ reviewservices });
};

exports.createReviewServices = async (req, res) => {

    review_services.create(req.body).then(review_services => {
        res.send("Success Yeah!!");
    });
};

exports.getReviewServicesById = async (req, res) => {
    const reviewservices = await review_services.findById(req.params.id);

    res.json({ reviewservices });
};

exports.updateReviewServicesById = async (req, res) => {
    const [isUpdated] = await review_services.update(req.body, {
        where: { id: req.params.id }
    });

    if (Boolean(isUpdated)) {
        const reviewservices = await review_services.findById(req.params.id);

        res.json({ reviewservices });
    } else {
        res.json({});
    }
};

exports.deleteReviewServicesById = async (req, res) => {
    await ReviewServices.destroy({ where: { id: req.params.id } });

    res.json({});
};