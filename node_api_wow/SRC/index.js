import express from "express";
import {AppDataSource} from "./database/config.js"
const server = express();
server.use(express.json());
AppDataSource.initialize().then(async()=>{
    console.log("Conectando no banco de dados");
    server.listen(3333,()=>{
        console.log("Tá rodando, chefe")
    });

}).catch((err)=>{
    console.log("FALHA")
});