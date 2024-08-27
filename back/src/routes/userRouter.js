
const {Router} = require("express");
const userController = require("../controllers/userController");
const validateUser = require("../middleware/validateUser");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);

userRouter.post("/", validateUser, userController.createUser);

module.exports = userRouter;