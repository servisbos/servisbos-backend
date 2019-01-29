const express = require("express");
const router = express.Router();
// const isAuthenticated = require("../middlewares").isAuthenticated;
const ReviewServicesController = require("../controllers/ReviewServicesController");

router
  .route("/")
  .get(ReviewServicesController.getReviewServices)
  .post(ReviewServicesController.createReviewServices);

router
  .route("/:id")
  .get(ReviewServicesController.getReviewServicesById)
  .patch(ReviewServicesController.updateReviewServicesById)
  .delete(ReviewServicesController.deleteReviewServicesById);

module.exports = router;
