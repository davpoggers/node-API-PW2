import {EntitySchema} from "typeorm";
const genero = new EntitySchema({
    name:"genero",
    tableName:"genero",
    columns:{
        id:{primary:true,type:"int",generated:"increment"},
        nome_genero:{type:"varchar",length:60,nullable:false},
        createdAt:{type:"datetime",nullable:false,default:()=>"CURRENT_TIMESTAMP"},
        deletedAt:{type:"datetime",nullable:true}
    }
});
export default genero;