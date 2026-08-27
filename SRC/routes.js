import express from "express";
import userController from "./controllers/User/userController.js";

const routes = express();

routes.use("/User", userController);

export default routes;