const Sequelize=require('sequelize');

const sequelize = new Sequelize('node_js_learn_api', 'application','s@myD#@mnl@sy',{
    host:'172.29.67.213',
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
.then((result) => {
    console.log('Connection has been established successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;

