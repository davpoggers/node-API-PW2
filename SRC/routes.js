import express from "express";
import userController from "./controllers/userController.js";

const routes = express.Router();

routes.use("/user", userController);

export default routes;