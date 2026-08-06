import "reflect-metadata";
import {DataSource} from "typeorm";


const AppDataSource = new DataSource({
    type: "mysql",
    host:"localhost",
    username:"root",
    port: 3306,
    database:"projeto_api",
    password:"etecembu@123",
    entities:["src/model/*.js"],
    migrations:["src/database/migrations/*.cjs"]
});
export {AppDataSource};
