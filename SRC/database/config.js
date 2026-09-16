import "reflect-metadata";
import user from "../model/user.js";
import {DataSource} from "typeorm";


const AppDataSource = new DataSource({
    type: "mysql",
    host:"localhost",
    username:"root",
    port: 3306,
    database:"projeto_api",
    password:"",
    entities:[user],
    migrations:["src/database/migrations/*.cjs"]
});
export {AppDataSource};
