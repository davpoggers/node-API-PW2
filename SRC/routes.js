import express from "express";
import userController from /.controllers/userController.js;

const routes = exxpress();

routes.use("/User", userController);

export default routes;