import express from "express";

const route = express.Router();

route.post("/", (request, response) => {
    return response.send("Deu certo yipee!");
});

export default routes;