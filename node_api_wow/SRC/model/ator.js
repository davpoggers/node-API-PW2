import {EntitySchema} from "typeorm";
const ator = new EntitySchema({
    name:"ator",
    tableName:"ator",
    columns:{
        id:{primary:true,type:"int",generated:"increment"},
        nome_ator:{type:"varchar",lenght:50,nullable:false},
        nacionalidade:{type:"varchar",lenght:50,nullable:false},
        foto_ator:{type:"varchar",lenght:80,nullable:true},
        sexo:{type:"enum",enum:["masculino","feminino"],nullable:false},
        data_nascimento:{type:"datetime",nullable:false},
        createdAt:{type:"datetime",nullable:false,default:()=>"CURRENT_TIMESTAMP"},
        deletedAt:{type:"datetime",nullable:true}
    }
});
export default ator;