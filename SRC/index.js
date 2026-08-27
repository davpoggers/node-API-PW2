import express from 'express';
import { AppDataSource } from "./database/config.js";
import routes from "./routes.js";

const server = express();
server.use(express.json());
server.use("/", routes);

AppDataSource.initialize().then(async() => {
    console.log("Database connected :3");

    server.listen(3333, () => {
        console.log("Server is running! =P");
    });
}).catch((errr) => {
    console.log("Error during Data Source initialization" + errr);
});
