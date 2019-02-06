const express = require("express");
const router = express.Router();
// const isAuthenticated = require("../middlewares").isAuthenticated;
const UserServiceTypeController = require("../controllers/UserServiceTypeController");

router
  .route("/")
  .get(UserServiceTypeController.getUserServiceType)
  .post(UserServiceTypeController.createUserServiceType);

router
  .route("/:id")
  .get(UserServiceTypeController.getUserServiceTypeById)
  .patch(UserServiceTypeController.updateUserServiceTypeById)
  .delete(UserServiceTypeController.deleteUserServiceTypeById);

router.route("/findProvider/:id_services_type")
.get(UserServiceTypeController.getUserServiceTypeByIdServiceType)
module.exports = router;
