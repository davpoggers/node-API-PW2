import express from 'express';
import { AppDataSource } from "database/config.js"
import routes from "./routes.js"

const server = express();

server.listen(3333, () => {
    console.log("Server is running! =P");
});