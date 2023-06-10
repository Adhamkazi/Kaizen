const express = require('express');

const {genralFormModal}= require("../Modals/GenralForm");

const genralFormRouter= express.Router();



genralFormRouter.get('/',async(req,res)=>{
   let query = req.query;
   console.log("query");
   try{
const user  = await genralFormModal.find(query);
res.send(user);
   }catch(err){
    res.send({ "msg": "unable to get the user data", "error": err.message })
   }
});


genralFormRouter.post("/genral-5",async(req,res)=>{

    try {
        const genralInfo = new genralFormModal(req.body);
        await genralInfo.save();
        res.send({"msg":"form has been saved successfully"});
    } catch (error) {
        res.send({ "msg": "unable to submit Form", "error": error.message })
    }
})



module.exports = {genralFormRouter}