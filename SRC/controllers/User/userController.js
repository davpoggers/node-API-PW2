import express from "express";

const route = express.Router();

route.post("/", (request, response) => {
    return response.send("Deu certo yipee!");
});

route.post("/", (request, response) => {
    //nome, email, senha, tipo de usuário
    const { name, email, password, typeUser } = request.body;

    console.log(name, email, password, typeUser);
});

export default route;