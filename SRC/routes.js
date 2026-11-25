import express from "express";
import userController from "./controllers/User/userController.js";
import loginController from "./controllers/loginController.js";
import atorController from "./controllers/Ator/atorController.js";
import diretorController from "./controllers/Diretor/diretorController.js";
import generoController from "./controllers/Genero/generoController.js";
import premiacaoController from "./controllers/Premiacao/premiacaoController.js";
import { authenticate } from "./utils/jwt.js";

const routes = express();

routes.use("/User", userController);
routes.use("/login", loginController);
routes.use("/Ator", authenticate, atorController);
routes.use("/Diretor", authenticate, diretorController);
routes.use("/Genero", authenticate, generoController);
routes.use("/Premiacao", authenticate, premiacaoController);

export default routes;