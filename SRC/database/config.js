import "reflect-metadata";
import user from "../model/user.js";
import premiacao from "../model/premiacao.js";
import genero from "../model/genero.js";
import diretor from "../model/diretor.js";
import ator from "../model/ator.js";
import {DataSource} from "typeorm";


const AppDataSource = new DataSource({
    type: "mysql",
    host:"localhost",
    username:"root",
    port: 3306,
    database:"projeto_api",
    password:"",
    entities:[user, premiacao, genero, diretor, ator],
    migrations:["src/database/migrations/*.cjs"]
});
export {AppDataSource};
