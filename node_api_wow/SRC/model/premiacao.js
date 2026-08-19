import {EntitySchema} from "typeorm";
const premiacao = new EntitySchema({
    name:"premiacao",
    tableName:"premiacao",
    columns:{
        id:{primary:true,type:"int",generated:"increment"},
        nome_premiacao:{type:"varchar",length:60,nullable:false},
        valor_premiacao:{type:"decimal", nullable:true},
        createdAt:{type:"datetime",nullable:false,default:()=>"CURRENT_TIMESTAMP"},
        deletedAt:{type:"datetime",nullable:true}
    }
});
export default premiacao;