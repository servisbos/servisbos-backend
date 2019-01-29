const express = require("express");
const router = express.Router();
// const isAuthenticated = require("../middlewares").isAuthenticated;
const ServicestypesController = require("../controllers/ServicesTypesController");

router
    .route("/")
    .get(ServicestypesController.getServicesType)
    .post(ServicestypesController.createServiceType);

router
    .route("/:id")
    .get(ServicestypesController.getServiceTypeById)
    .patch(ServicestypesController.updateServiceTypeById)
    .delete(ServicestypesController.deleteServiceTypeById);

module.exports = router;