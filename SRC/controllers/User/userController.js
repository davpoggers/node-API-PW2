import express from "express";
import {AppDataSource} from "../../database/config.js";
import user from "../../model/user.js";
import {isNull} from "typeorm";

const route = express.Router();
const userTable = AppDataSource.getRepository(user);

route.get("/", async (request, response) => {
    const users = await userTable.findBy({"typeUser": "comum", "deletedAt": isNull()});
    return response.status(200).send({response: users});
});

route.post("/", async (request, response) => {
    //nome, email, senha, tipo de usuário
    const { name, email, password, typeUser } = request.body;

    if (name.length < 2) {
        return response.status(400).send("O nome deve conter mais de um caractere.");
    }

    if (!email.includes("@")) {
        return response.status(400).send("O email deve conter @.");
    }

    if (password.length < 6) {
        return response.status(400).send("A senha deve conter mais de 6 caracteres.");
    }

    if (typeUser.toLowerCase() !== "admin" && typeUser.toLowerCase() !== "comum") {
        return response.status(400).send("Esse tipo de usuário é inválido.");
    }

    try{
        const userdata = userTable.create({ name, email, password, typeUser });
        await userTable.save(userdata);

        return response.status(201).send("Usuário cadastrado com sucesso!");
    } catch (error) {
        return response.status(500).send("response" + error);
    }
});

export default route;