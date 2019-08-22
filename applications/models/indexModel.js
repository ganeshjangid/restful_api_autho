const Sequelize=require('sequelize');
const db=require('../config/db');

const tbl_user = db.define('tbl_user',{
    id:{
        type: Sequelize.BIGINT,
        allowNull:true,
        primaryKey:true,
        autoIncrement:true   
    },
    name:{
        type: Sequelize.STRING,
        default:''
    },
    mobile:{
        type: Sequelize.INTEGER,
        default: ''
    }
});

db.sync({
    force: true 
}).then(() => {
    // Now the `users` table in the database corresponds to the model definition
});


