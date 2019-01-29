const express = require("express");
const router = express.Router();
// const isAuthenticated = require("../middlewares").isAuthenticated;
const PaymentTypesController = require("../controllers/PaymentTypesController");

router
  .route("/")
  .get(PaymentTypesController.getPaymentType)
  .post(PaymentTypesController.createPaymentType);

router
  .route("/:id")
  .get(PaymentTypesController.getPaymentTypeById)
  .patch(PaymentTypesController.updatePaymentTypeById)
  .delete(PaymentTypesController.deletePaymentTypeById);

module.exports = router;
