const express = require("express");
const router = express.Router();
// const isAuthenticated = require("../middlewares").isAuthenticated;
const OrderController = require("../controllers/OrderController");

router
    .route("/")
    .get(OrderController.getOrder)
    .post(OrderController.createOrder);

router
    .route("/:id")
    .get(OrderController.getOrderById)
    .patch(OrderController.updateOrderById)
    .delete(OrderController.deleteOrderById);

module.exports = router;