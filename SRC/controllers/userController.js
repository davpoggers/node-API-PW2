import express from "express";

const route = express.Router();

route.post("/", (request, response) => {
    return response.send("ebaaaaaaaa !");
});

export default route;