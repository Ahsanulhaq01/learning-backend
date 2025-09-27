// require('dotenv').config({path :'./env'}); 
// but this line is breaking our consistency because of importing it through require while other are imported as import statment to solve this problem

import dotenv from 'dotenv';
import connectDB from "./db/index.js";
dotenv.config({ path: './.env',quiet: true})

connectDB();
/*
import express from 'express';
const app = express();
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on('error' ,(error)=>{
            console.error("Error" , error)
            throw error
        })
        app.listen(process.env.PORT ,()=>{
            console.log(`app is running on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("Error :" , error);
        throw error
        
    }
})()

*/