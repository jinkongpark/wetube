import express from "express";
import routes from "../routes";
import { changePassword, editProfile, userDetail, users } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;

// MVC는 그냥 패턴 또는스트럭처 이다
// Model: data
// View: How does the data look
// Controller: the function that looks for the data