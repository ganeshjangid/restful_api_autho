const express=require('express');
const app=new express();

const port=process.env.port || 1064;
const indexRouters=require('./applications/routes/indexRouters');


app.use(indexRouters);
app.listen(port,()=> console.log(`This server is running on ${port}`));


/* 
API Test

http://172.29.64.51:1062/apiTest
*/