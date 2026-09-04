import express from "express";
import {AppDataSource} from "../../database/config.js";
import user from "../../model/user.js";

const route = express.Router();
const userTable = AppDataSource.getRepository(user);

route.post("/", (request, response) => {
    return response.send("Deu certo yipee!");
});

route.post("/", (request, response) => {
    //nome, email, senha, tipo de usuário
    const { name, email, password, typeUser } = request.body;

    const userdata = userTable.create({ name, email, password, typeUser });
    userTable.save(userdata);

    console.log(name, email, password, typeUser);
});

export default route;