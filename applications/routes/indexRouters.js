const express=require('express');
const router=express.Router();

const indexController=require('../controllers/indexControllers');

router.get('/apiTest', indexController.apiTest);

module.exports=router;