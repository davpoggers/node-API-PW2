import {EntitySchema} from "typeorm";
const diretor = new EntitySchema({
    name:"diretor",
    tableName:"diretor",
    columns:{
        id:{primary:true,type:"int",generated:"increment"},
        nome_diretor:{type:"varchar",lenght:60,nullable:false},
        nacionalidade:{type:"varchar",lenght:50,nullable:false},
        foto_diretor:{type:"varchar",lenght:80,nullable:true},
        sexo:{type:"enum",enum:["masculino","feminino"],nullable:false},
        data_nascimento:{type:"datetime",nullable:false},
        createdAt:{type:"datetime",nullable:false,default:()=>"CURRENT_TIMESTAMP"},
        deletedAt:{type:"datetime",nullable:true}
    }
});
export default diretor;