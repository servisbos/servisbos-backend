const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/auth");
const UserController = require("../controllers/UserController");

router
  .route("/")
  .get(UserController.getUsers)
  .post(UserController.createUser);

router
  .route("/:id")
  .get(UserController.getUserById)
  .patch(UserController.updateUserById)
  .delete(UserController.deleteUserById);

router
  .route("/:usersbyservice")
  .get(UserController.filterUserByServicesType)

  router
  .route("/getDataProvider/:id_provider")
  .get(UserController.getDataProvider)

router.post("/login", UserController.login);

module.exports = router;
