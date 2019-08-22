const indexModel=require('../models/indexModel');

exports.apiTest=async (req,res,nex)=>{
    res.json({
    msg: 'Hello',
    status: 'success',
    status_code: 200
    });
};


