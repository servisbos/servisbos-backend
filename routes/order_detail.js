const express = require("express");
const router = express.Router();
// const isAuthenticated = require("../middlewares").isAuthenticated;
const OrderDetailController = require("../controllers/OrderDetailController");

router
  .route("/")
  .get(OrderDetailController.getOrderDetail)
  .post(OrderDetailController.createOrderDetail);

router
  .route("/:id")
  .get(OrderDetailController.getOrderDetailById)
  .patch(OrderDetailController.updateOrderDetailById)
  .delete(OrderDetailController.deleteOrderDetailById);

module.exports = router;
